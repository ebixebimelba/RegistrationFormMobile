export default function TitleField(props: TitleFieldProps) {
  return (
    <>
      <div
        className={`h-16 absolute text-left font-normal w-[313px] left-[calc(50%_-_156.5px_+_0px)] font-['Poppins'] transition-all ${
          props.type === "DEFAULT_TYPE" ? "top-[1002px]" : ""
        } ${props.type === "DEFAULT_TYPE1" ? "top-[562px]" : ""} ${
          props.type === "DEFAULT_TYPE2" ? "top-[650px]" : ""
        } ${props.type === "DEFAULT_TYPE3" ? "top-[738px]" : ""}`}
      >
        <div
          className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] inset-x-0 h-10 top-6 absolute bg-white rounded"
         />
        <p
          className="inset-x-4 h-6 top-8 absolute text-sm inline m-0 w-[281px] leading-[normal] text-[rgba(179,182,197,1)]"
        >
          {props.text}
        </p>
        <div
          className="h-4 absolute left-0 top-0 leading-none inline-block w-[313px]"
        >
          <p className="text-sm text-black inline m-0 leading-[normal]">
            {props.text1}
          </p>
          <p
            className="text-sm inline m-0 leading-[normal] text-[rgba(248,82,85,1)]"
          >
            {props.text2}
          </p>
        </div>
      </div>
    </>
  );
}

TitleField.defaultProps = {
  type: "DEFAULT_TYPE",
  text: "0000 0000 0000 0000",
  text1: "Subscription Payment",
  text2: "*",
};

interface TitleFieldProps {
  type: "DEFAULT_TYPE" | "DEFAULT_TYPE1" | "DEFAULT_TYPE2" | "DEFAULT_TYPE3";
  text: string;
  text1: string;
  text2: string;
}

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
