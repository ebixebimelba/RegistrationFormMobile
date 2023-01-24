import Vector from "assets/Vector";

export default function IconsBurgerMenu(props: IconsBurgerMenuProps) {
  return (
    <div className="w-4 h-4 absolute top-7 left-[344.09px]">
      <div className="inset-y-0 right-0 absolute left-[0.01%]" />
      <Vector />
    </div>
  );
}

IconsBurgerMenu.defaultProps = {};

interface IconsBurgerMenuProps {}

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
