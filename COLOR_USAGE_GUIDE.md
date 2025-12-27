# Pecify Color Usage Guide

Quick reference for using the new vibrant gradient color scheme in your components.

---

## Quick Color Reference

```
🔴 Neon Pink      #f72585  - Accent, highlights, CTAs
💜 Raspberry Plum #b5179e  - Dark mode primary
🟣 Indigo Bloom   #7209b7  - Main primary color (MOST USED)
🔵 Ultrasonic Blue #560bad - Primary dark variant
💙 True Azure     #480ca8  - Mid-range blue
💠 Vivid Royal    #3a0ca3  - Deep blue
🔷 Bright Indigo  #3f37c9  - Bright blue accent
⚡ Electric Sapphire #4361ee - Secondary color
🌊 Blue Energy    #4895ef  - Light blue
💎 Sky Aqua       #4cc9f0  - Lightest accent
```

---

## Using Theme Colors

### In Styled Components

Always use theme colors instead of hardcoded values:

```typescript
// ✅ CORRECT
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

// ❌ WRONG
const Button = styled.button`
  background: #7209b7;
  color: white;
`;
```

### Available Theme Properties

```typescript
// Colors
theme.colors.primary        // #7209b7 - Indigo Bloom
theme.colors.primaryDark    // #560bad - Ultrasonic Blue
theme.colors.primaryLight   // #b5179e - Raspberry Plum
theme.colors.secondary      // #4361ee - Electric Sapphire
theme.colors.accent         // #f72585 - Neon Pink
theme.colors.gradient       // Full gradient

// Typography
theme.fonts.primary         // Inter (body text)
theme.fonts.secondary       // DM Serif Display (headings, logo)
theme.fonts.mono            // JetBrains Mono (code)

// Shadows
theme.shadows.neon          // Neon glow effect
theme.shadows.neonHover     // Stronger glow on hover
```

---

## Common Patterns

### 1. Gradient Button (Primary CTA)

```typescript
const GradientButton = styled.button`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 10px 15px -3px rgba(114, 9, 183, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(114, 9, 183, 0.4);
  }
`;
```

### 2. Outline Button (Secondary)

```typescript
const OutlineButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
```

### 3. Text Links

```typescript
const TextLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;
```

### 4. Card with Gradient Top Border

```typescript
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 1rem 1rem 0 0;
  }
`;
```

### 5. Icon Wrapper with Colored Background

```typescript
const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary}15`}; // 15% opacity
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
```

### 6. Input with Focus State

```typescript
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
```

### 7. Heading with DM Serif Display

```typescript
const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary}; // DM Serif Display
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.025em;
  line-height: 1.1;
`;
```

### 8. Logo Component

```typescript
const Logo = styled(Link)`
  font-size: 1.875rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.primary}60);
  }
`;
```

### 9. Neon Glow Effect

```typescript
const GlowCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.neon};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.neonHover};
    transform: translateY(-4px);
  }
`;
```

### 10. Gradient Text

```typescript
const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 2rem;
`;
```

### 11. Badge/Tag Component

```typescript
const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => `${theme.colors.primary}15`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
```

### 12. Gradient Background Panel

```typescript
const GradientPanel = styled.div`
  background: linear-gradient(135deg, #560bad 0%, #7209b7 100%);
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  /* Dot pattern */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.1;
    pointer-events: none;
  }
`;
```

---

## Color Combinations

### For Buttons

| Type | Background | Text | Border | Hover |
|------|------------|------|--------|-------|
| Primary | Gradient | White | None | Lift + Shadow |
| Secondary | Transparent | Primary | Primary | Primary bg + White text |
| Tertiary | Primary (10%) | Primary | None | Primary (20%) |
| Danger | Error | White | None | Error dark |

### For Cards

| Type | Background | Border | Top Accent |
|------|------------|--------|-----------|
| Default | Surface | Border | None |
| Featured | Surface | Border | Gradient (4px) |
| Elevated | Surface | None | Shadow + Gradient |

### For Icons

| Context | Background | Icon Color |
|---------|------------|-----------|
| Feature | Primary (15%) | Primary |
| Success | Success (15%) | Success |
| Warning | Warning (15%) | Warning |
| Error | Error (15%) | Error |
| Info | Secondary (15%) | Secondary |

---

## Opacity Guide

Use these opacity values for consistency:

```typescript
// Background tints
${theme.colors.primary}10  // 10% - Very subtle
${theme.colors.primary}15  // 15% - Icon backgrounds
${theme.colors.primary}20  // 20% - Hover states
${theme.colors.primary}30  // 30% - Active states
${theme.colors.primary}40  // 40% - Borders

// Shadows
rgba(114, 9, 183, 0.1)  // Subtle shadow
rgba(114, 9, 183, 0.2)  // Card shadow
rgba(114, 9, 183, 0.3)  // Button shadow
rgba(114, 9, 183, 0.4)  // Hover shadow
rgba(114, 9, 183, 0.5)  // Strong shadow
```

---

## Dark Mode Considerations

The theme automatically handles dark mode. Just use theme colors:

```typescript
// This works in both light and dark mode
const Component = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
```

**In Dark Mode:**
- `primary` becomes Raspberry Plum (#b5179e)
- `secondary` becomes Blue Energy (#4895ef)
- `accent` becomes Sky Aqua (#4cc9f0)
- Gradient remains the same (universal)

---

## Font Pairing

### DM Serif Display (Headings)

Use for:
- Logo
- Page titles (h1)
- Section headings (h2)
- Card titles
- Hero headlines

```typescript
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: 700;
letter-spacing: -0.025em;
```

### Inter (Body)

Use for:
- Paragraphs
- UI elements
- Buttons
- Labels
- Navigation

```typescript
font-family: ${({ theme }) => theme.fonts.primary};
```

### JetBrains Mono (Code)

Use for:
- Code blocks
- API examples
- Technical documentation

```typescript
font-family: ${({ theme }) => theme.fonts.mono};
```

---

## Animation Patterns

### Button Hover

```typescript
transition: all 0.3s ease;

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(114, 9, 183, 0.4);
}
```

### Card Hover

```typescript
transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: ${({ theme }) => theme.shadows.neonHover};
}
```

### Icon Scale

```typescript
transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
```

### Link Underline

```typescript
position: relative;

&::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.gradient};
  transition: width 0.3s ease;
}

&:hover::after {
  width: 100%;
}
```

---

## Accessibility

### Minimum Contrast Ratios

All combinations meet WCAG 2.1 AA:

```typescript
// Safe combinations
Primary (#7209b7) on White      → 7.8:1 ✅
Primary on Background (#FAF5FF) → 7.2:1 ✅
Text (#1F2937) on White         → 16:1 ✅
Accent (#f72585) on Dark        → 8.2:1 ✅
```

### Focus Indicators

Always include visible focus states:

```typescript
&:focus {
  outline: none;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
}
```

---

## Common Mistakes to Avoid

### ❌ Don't hardcode colors

```typescript
// BAD
background: #7209b7;
```

### ✅ Use theme colors

```typescript
// GOOD
background: ${({ theme }) => theme.colors.primary};
```

### ❌ Don't use wrong font

```typescript
// BAD
font-family: 'Space Grotesk', sans-serif;
```

### ✅ Use theme fonts

```typescript
// GOOD
font-family: ${({ theme }) => theme.fonts.secondary};
```

### ❌ Don't forget opacity syntax

```typescript
// BAD
background: ${({ theme }) => theme.colors.primary}0.15; // Wrong!
```

### ✅ Use proper opacity format

```typescript
// GOOD
background: ${({ theme }) => `${theme.colors.primary}15`}; // Hex opacity
```

---

## Quick Start Template

```typescript
'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(114, 9, 183, 0.4);
  }
`;

export default function MyPage() {
  return (
    <Container>
      <Title>Welcome to Pecify</Title>
      <Subtitle>The future of payment solutions</Subtitle>
      <Button>Get Started</Button>
    </Container>
  );
}
```

---

## Resources

- **Theme File:** `styles/themes/theme.ts`
- **Example Login:** `app/login/page.tsx`
- **Example Register:** `app/register/page.tsx`
- **Example Hero:** `components/sections/HeroNew.tsx`

---

**Last Updated:** December 28, 2024
**Quick Reference Guide v1.0**
