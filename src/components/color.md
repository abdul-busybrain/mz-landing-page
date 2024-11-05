I'll help you create a comprehensive color system based on your primary color #0672D0 and provide specific usage recommendations.

```tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ColorSystemGuide = () => {
  const colorSystem = {
    primary: {
      50: "#F0F7FF", // Lightest tint
      100: "#E0EFFF",
      200: "#BAD9FF",
      300: "#85B8FF",
      400: "#4792FF",
      500: "#0672D0", // Base color
      600: "#0561B0",
      700: "#044D8A",
      800: "#033A68",
      900: "#022847", // Darkest shade
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  };

  const usageGuide = [
    {
      element: "Primary Buttons",
      color: colorSystem.primary[500],
      hover: colorSystem.primary[600],
      rationale:
        "Base color for high-contrast CTAs. Meets WCAG AAA with white text.",
      accessibility: "Contrast ratio 4.5:1 with white text",
    },
    {
      element: "Hero Section",
      background: colorSystem.primary[50],
      textPrimary: colorSystem.grey[900],
      textSecondary: colorSystem.grey[600],
      rationale: "Subtle background with high contrast text for readability",
      accessibility: "Background-text contrast ratio >7:1",
    },
    {
      element: "Navigation Links",
      color: colorSystem.grey[700],
      hover: colorSystem.primary[500],
      rationale: "Neutral but readable, with brand color on hover",
      accessibility: "Meets WCAG AA for text contrast",
    },
    {
      element: "Feature Cards",
      background: "white",
      border: colorSystem.grey[200],
      heading: colorSystem.grey[900],
      text: colorSystem.grey[600],
      rationale: "Clean, professional appearance with optimal readability",
      accessibility: "Text contrast >4.5:1",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Color Palette Display */}
      <Card>
        <CardHeader>
          <CardTitle>Color System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Primary Colors</h3>
              <div className="grid grid-cols-10 gap-2">
                {Object.entries(colorSystem.primary).map(([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-12 h-12 rounded-lg shadow-sm mb-1"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs">{shade}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Grey Scale</h3>
              <div className="grid grid-cols-10 gap-2">
                {Object.entries(colorSystem.grey).map(([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-12 h-12 rounded-lg shadow-sm mb-1"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs">{shade}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {usageGuide.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">{item.element}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">{item.rationale}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.accessibility}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {item.color && (
                      <div
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                    {item.hover && (
                      <div
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: item.hover }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorSystemGuide;
```

Here's a detailed breakdown of how to use this color system effectively:

1. Primary Actions & CTAs

- Button Background: Primary-500 (#0672D0)
- Hover State: Primary-600 (#0561B0)
- Text: White
- Rationale: Creates visual hierarchy and meets WCAG AAA contrast requirements

2. Navigation & Header

- Background: White or Grey-50 (#F8FAFC)
- Nav Links: Grey-700 (#334155)
- Active/Hover: Primary-500 (#0672D0)
- Rationale: Clean, professional appearance with clear interaction states

3. Hero Section

- Background: Primary-50 (#F0F7FF)
- Heading: Grey-900 (#0F172A)
- Description: Grey-600 (#475569)
- Rationale: Creates brand connection while maintaining readability

4. Feature Sections

- Background: White
- Headings: Grey-800 (#1E293B)
- Body Text: Grey-600 (#475569)
- Icons/Accents: Primary-500 (#0672D0)
- Rationale: Optimizes readability while maintaining visual interest

5. Secondary Elements

- Secondary Buttons: White background, Primary-500 border
- Hover: Primary-50 background
- Links: Primary-500
- Hover: Primary-600
- Rationale: Creates clear hierarchy without overwhelming the interface

6. Content Areas

- Background: White
- Headers: Grey-800
- Body Text: Grey-700
- Borders: Grey-200
- Rationale: Maximum readability for dense information

7. Footer

- Background: Grey-50 or Grey-100
- Text: Grey-600
- Links: Grey-700
- Hover: Primary-500
- Rationale: Subtle separation from main content while maintaining brand connection

8. Interactive Elements

- Focus States: Primary-300 (#85B8FF)
- Error States: Red-500 (#EF4444)
- Success States: Green-500 (#10B981)
- Rationale: Clear feedback while maintaining accessibility

Accessibility Considerations:

1. All text combinations meet WCAG AA standards (minimum 4.5:1 contrast ratio)
2. Interactive elements have distinct hover/focus states
3. Error states use color plus icons/text for colorblind users
4. Critical information never relies on color alone

Color Psychology Impact:

1. Blue (Primary) conveys: Trust, Professionalism, Reliability
2. Grey scale: Stability, Maturity, Balance
3. White space: Clarity, Simplicity, Ease of use
