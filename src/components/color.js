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
