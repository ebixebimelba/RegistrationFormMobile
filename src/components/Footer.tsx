export default function Footer(props: FooterProps) {
  return (
    <div
      className={`inset-x-0 h-32 absolute bottom-0 text-center font-normal font-['Poppins']`}
    >
      <div className="inset-0 absolute bg-white drop-shadow-lg" />
      <p
        className="inset-x-4 h-4 absolute text-xs inline m-0 w-[343px] top-[calc(50%_-_8px_+_32px)] leading-[normal] text-[rgba(126,130,152,1)]"
      >
        © EverythingLegal 2022. All Right Reserved.
      </p>
      <p
        className="inset-x-4 h-4 absolute text-xs text-black inline m-0 w-[343px] top-[calc(50%_-_8px_+_8px)] leading-[normal]"
      >
        {"Terms & Conditions "}
        <br />
        {" Privacy Policy"}
      </p>
      <div
        className="h-6 absolute left-4 top-6 leading-none inline-block w-[343px]"
      >
        <p className="text-xs leading-6 text-black inline m-0">{"FAQ "}</p>
        <p
          className="text-xs leading-6 inline m-0 text-[rgba(126,130,152,1)]"
        >
          •
        </p>
        <p className="text-xs leading-6 text-black inline m-0">
          {" Contact "}
        </p>
        <p
          className="text-xs leading-6 inline m-0 text-[rgba(126,130,152,1)]"
        >
          •
        </p>
        <p className="text-xs leading-6 text-black inline m-0">
          {" Customer Support"}
        </p>
      </div>
    </div>
  );
}

Footer.defaultProps = {};

interface FooterProps {}

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
