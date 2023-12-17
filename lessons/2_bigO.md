---
path: "/2_bigO"
title: "BIG O and Time complexity"
order: "2A"
description: "The second page"
section: "Basics"
icon: "book"
---

<br/>

### What is Big O?

![bigo](./bigo.png)

Examples

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  return sum;
}
```
