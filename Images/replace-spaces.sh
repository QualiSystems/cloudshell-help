#!/bin/bash

# Function to replace spaces with dashes in file and folder names
replace_spaces_with_dash() {
    local current_dir="$1"
    for item in "$current_dir"/*; do
        if [ -f "$item" ]; then
            # Rename files with spaces to replace with dashes
            new_name=$(echo "$item" | tr ' ' '-')
            if [ "$item" != "$new_name" ]; then
                mv "$item" "$new_name"
                echo "Renamed file: $item to $new_name"
            fi
        elif [ -d "$item" ]; then
            # Rename folders with spaces to replace with dashes
            new_name=$(echo "$item" | tr ' ' '-')
            if [ "$item" != "$new_name" ]; then
                mv "$item" "$new_name"
                echo "Renamed folder: $item to $new_name"
            fi

            # Recursively call the function for subfolders
            replace_spaces_with_dash "$new_name"
        fi
    done
}

# Start the script from the current directory
replace_spaces_with_dash "$(pwd)"
