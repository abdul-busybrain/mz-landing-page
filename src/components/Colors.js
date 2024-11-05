/**
 * Primary Color Scale (#0672D0) - Use these Tailwind classes:
 *
 * bg-blue-500 -> Primary base color (#0672D0)
 * text-blue-500 -> Primary text color
 *
 * Primary Color Scale:
 * bg-blue-50   -> Lightest tint  (Backgrounds, cards)
 * bg-blue-100  -> Light tint     (Secondary backgrounds)
 * bg-blue-200  -> Softer tint    (Borders, dividers)
 * bg-blue-300  -> Soft tint      (Accents)
 * bg-blue-400  -> Medium tint    (Secondary buttons)
 * bg-blue-500  -> Base color     (Primary actions) #0672D0
 * bg-blue-600  -> Dark shade     (Hover states)
 * bg-blue-700  -> Darker shade   (Active states)
 * bg-blue-800  -> Deepest shade  (Text on light backgrounds)
 * bg-blue-900  -> Darkest shade  (Emphasis text)
 */

// Component-specific usage:
const colorClasses = {
  // Primary Buttons
  primaryButton: {
    default: "bg-blue-500 text-white",
    hover: "hover:bg-blue-600",
    active: "active:bg-blue-700",
    disabled: "disabled:bg-blue-200",
  },

  // Secondary Buttons
  secondaryButton: {
    default: "bg-white border border-blue-500 text-blue-500",
    hover: "hover:bg-blue-50",
    active: "active:bg-blue-100",
  },

  // Navigation
  nav: {
    background: "bg-white",
    links: "text-gray-600",
    activeLink: "text-blue-500",
    hover: "hover:text-blue-600",
  },

  // Hero Section
  hero: {
    background: "bg-blue-50",
    heading: "text-gray-900",
    description: "text-gray-600",
    highlight: "text-blue-500",
  },

  // Feature Cards
  featureCards: {
    container: "bg-white",
    border: "border border-gray-200",
    heading: "text-gray-900",
    text: "text-gray-600",
    icon: "text-blue-500",
  },

  // Content
  content: {
    heading: "text-gray-900",
    subheading: "text-gray-700",
    paragraph: "text-gray-600",
    link: "text-blue-500 hover:text-blue-600 underline",
  },

  // Forms
  forms: {
    input: "border border-gray-200 focus:ring-blue-500 focus:border-blue-500",
    label: "text-gray-700",
    helper: "text-gray-500",
    error: "text-red-500",
  },

  // Footer
  footer: {
    background: "bg-gray-50",
    text: "text-gray-600",
    link: "text-gray-600 hover:text-blue-500",
  },

  // Alerts/Notifications
  alerts: {
    success: "bg-green-50 text-green-800 border-green-500",
    error: "bg-red-50 text-red-800 border-red-500",
    info: "bg-blue-50 text-blue-800 border-blue-500",
  },
};

// Usage Examples:
/*
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Primary Button
</button>

<nav className="bg-white">
  <a className="text-gray-600 hover:text-blue-500">Nav Link</a>
</nav>

<section className="bg-blue-50">
  <h1 className="text-gray-900">Hero Title</h1>
  <p className="text-gray-600">Hero description</p>
</section>
*/
