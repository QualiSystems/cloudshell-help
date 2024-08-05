---
sidebar_position: 2
---

# Annotated Start Page Example

## Example code will be used to show a Get Started tab

```markup
<?xml version="1.0" encoding="UTF-8"?>
<Tab Title="Get Started" Source="\\sharedDrive\StartPage\studio-getstarted.xml">
   <Subject Title="Studio">
      <Topic Title="Studio in action" Description="See how simple it is to use CloudShell studio for your first tests." Image="default.png">
         <SubTopic Title="My first test">
            <Link Type="Test" Title="Open sample" Target="CloudShell\Test\Local\ My first test" />
            <Link Type="Video" Title="Watch video" Target="http://www.youtube.com/watch?v=aFsAmnh8uug" />
         </SubTopic>
      </Topic>
   </Subject>
</Tab>
```

## Explanation

First it will try to get the content of the tab from the provided source.

```markup
<Tab Title="Get Started" Source="\\sharedDrive\StartPage\studio-getstarted.xml">
```

If it is not available it will use the fall back code (Studio subject).

```markup
<Subject Title="Studio">
…
</Subject>
```

If it is not available it will use the fall back code.

In this case, the fall back has one subject (Studio).

```markup
<Subject Title="Studio">
…
</Subject>
```

And that subject has just one topic: ("Studio in action") with a description and an image file.

```markup
<Topic Title="Studio in action" Description="See how simple it is to use CloudShell studio for your first tests." Image="default.png">
…
</Topic>
```

In this topic there is only one sub topic, and this sub topic has two links: one for a test and one for a video.

```markup
<SubTopic Title="My first test">
<Link Type="Test" Title="Open sample" Target="CloudShell\Test\Local\ My first test"/>
<Link Type="Video" Title="Watch video" Target="http://www.youtube.com/watch?v=aFsAmnh8uug"/>
</SubTopic>
```
