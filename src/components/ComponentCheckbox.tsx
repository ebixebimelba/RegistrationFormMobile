import Vector1 from "assets/Vector1";

export default function ComponentCheckbox(props: ComponentCheckboxProps) {
  return (
    <div
      className="absolute left-[8.27%] right-[85.33%] top-[52.23%] bottom-[46.67%]"
    >
      <div className="inset-0 absolute rounded bg-[rgba(0,158,247,1)]" />
      <Vector1 />
    </div>
  );
}

ComponentCheckbox.defaultProps = {};

interface ComponentCheckboxProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
