#!/usr/bin/env bash
set -euo pipefail

BUILD_DIR="${1:-build}"
REDIRECTS_FILE="${2:-redirects.txt}"
REDIRECTS_VER_FILE="${3:-redirects.ver}"

if [ ! -d "$BUILD_DIR" ]; then
  echo "Build dir '$BUILD_DIR' not found"
  exit 1
fi
if [ ! -f "$REDIRECTS_FILE" ]; then
  echo "Redirects file '$REDIRECTS_FILE' not found"
  exit 1
fi
if [ ! -f "$REDIRECTS_VER_FILE" ]; then
  echo "Redirects versions file '$REDIRECTS_VER_FILE' not found"
  exit 1
fi

# load all versions
versions=()
while IFS= read -r line || [ -n "$line" ]; do
  versions+=("$line")
done < "$REDIRECTS_VER_FILE"


# HTML redirect template (defined once, outside the loop to avoid redefinition)
redirect_html() {
    local url="$1"
    cat <<EOF
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url=${url}">
        <link rel="canonical" href="${url}" />
    </head>
    <body>
        <script>
            window.location.href = '${url}' + window.location.search + window.location.hash;
        </script>
    </body>
</html>
EOF
}

while IFS='|' read -r from to || [ -n "$from" ]; do
    # skip empty or comment lines
    case "$from" in
        ''|\#*) continue;;
    esac

    if [[ "$from" == *"{version}"* ]]; then
        for version in "${versions[@]}"; do
            from_versioned="${from//\{version\}/$version}"

            # normalize path: remove leading/trailing slash (root handled separately)
            if [ "$from_versioned" = "/" ] || [ -z "$from_versioned" ]; then
                target_dir="$BUILD_DIR"
            else
                from_versioned="${from_versioned#/}"
                from_versioned="${from_versioned%/}"
                target_dir="$BUILD_DIR/$from_versioned"
            fi

            mkdir -p "$target_dir"
            redirect_html "$to" > "$target_dir/index.html"
        done
    else
        # normalize path: remove leading/trailing slash (root handled separately)
        if [ "$from" = "/" ] || [ -z "$from" ]; then
            target_dir="$BUILD_DIR"
        else
            from="${from#/}"
            from="${from%/}"
            target_dir="$BUILD_DIR/$from"
        fi

        mkdir -p "$target_dir"
        redirect_html "$to" > "$target_dir/index.html"
    fi

done < "$REDIRECTS_FILE"