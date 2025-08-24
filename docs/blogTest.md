# General Testing
## Styling
- Normal text
- *Italian text*
- **Bold text**
- _Underline_
- <mark>Highlight text</mark>
- [Google Hyperlink text](https://www.google.com/)
- `single quote`

- Bullet 1
- Bullet 2
- Bullet 3

1. Number 1
2. Number 2
3. Number 3

## Table

| Header 1 | Header 2 | Header 3 |
|---|---|---|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |

## Image and Video

![Local Image](/img/green_background.jpg)

<!-- ![Website Image](https://docusaurus-junhong.s3.ap-southeast-1.amazonaws.com/%E7%A8%BB%E7%94%B0.jpg) -->

import upAndDownURL from '/img/3sec.mp4'; // Example import

<video controls>
  <source src={upAndDownURL} />
</video>

<!-- <iframe src="https://docusaurus-junhong.s3.ap-southeast-1.amazonaws.com/5sec.mp4"></iframe> -->

## Mermaid

Sample
```mermaid
graph TD
    A[Start] --> B{Is it a good day?};
    B -->|Yes| C[Go for a walk];
    B -->|No| D[Stay indoors];
    C --> E[Enjoy the sun];
    D --> F[Read a book];
```

Sample 2
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

Sample 3
```mermaid
pie title Fish Distribution
    "Salmon" : 386
    "Bass" : 85
    "Trout" : 150
```