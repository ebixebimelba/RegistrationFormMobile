export default function Vector1(props: Vector1Props) {
  return (
    <div className="inset-x-1/4 absolute top-[31.25%] bottom-[27.08%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 3.949 5.791 L 2.046 3.808 C 1.578 3.321 0.819 3.321 0.351 3.808 C-0.117 4.296 -0.117 5.086 0.351 5.574 L 3.789 9.155 C 4.23 9.615 4.945 9.615 5.387 9.155 L 11.649 2.631 C 12.117 2.144 12.117 1.353 11.649 0.866 C 11.181 0.378 10.422 0.378 9.954 0.866 L 5.227 5.791 C 4.874 6.158 4.302 6.158 3.949 5.791 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Vector1.defaultProps = {};

interface Vector1Props {}

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
