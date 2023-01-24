import IconsSmallArrowDown from "components/IconsSmallArrowDown";

export default function SelectTitleField(props: SelectTitleFieldProps) {
  return (
    <>
      <div
        className={`h-16 absolute text-left font-normal w-[313px] left-[calc(50%_-_156.5px_+_0px)] font-['Poppins'] transition-all ${
          props.type === "SELECTED_TYPE" ? "top-[826px]" : ""
        } ${props.type === "SELECTED_TYPE1" ? "top-[914px]" : ""}`}
      >
        {props.type === "SELECTED_TYPE" && (
          <div
            className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] inset-x-0 h-10 top-6 absolute rounded bg-[rgba(228,230,239,1)]"
           />
        )}
        {props.type === "SELECTED_TYPE" && (
          <p
            className="h-6 left-4 top-8 right-8 absolute text-sm inline m-0 w-[265px] leading-[normal] text-[rgba(126,130,152,1)]"
          >
            WA, Washington
          </p>
        )}
        {props.type === "SELECTED_TYPE" && (
          <IconsSmallArrowDown type="TYPE" />
        )}
        {props.type === "SELECTED_TYPE" && (
          <div
            className="h-4 absolute left-0 top-0 leading-none inline-block w-[313px]"
          >
            <p className="text-sm text-black inline m-0 leading-[normal]">
              I am a Licensed Notary in This State
            </p>
            <p
              className="text-sm inline m-0 leading-[normal] text-[rgba(248,82,85,1)]"
            >
              *
            </p>
          </div>
        )}
        {props.type === "SELECTED_TYPE1" && (
          <div
            className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] inset-x-0 h-10 top-6 absolute rounded bg-[rgba(228,230,239,1)]"
           />
        )}
        {props.type === "SELECTED_TYPE1" && (
          <p
            className="h-6 left-4 top-8 right-8 absolute text-sm inline m-0 w-[265px] leading-[normal] text-[rgba(126,130,152,1)]"
          >
            Annual subscription
          </p>
        )}
        {props.type === "SELECTED_TYPE1" && (
          <IconsSmallArrowDown type="TYPE" />
        )}
        {props.type === "SELECTED_TYPE1" && (
          <div
            className="h-4 absolute left-0 top-0 leading-none inline-block w-[313px]"
          >
            <p className="text-sm text-black inline m-0 leading-[normal]">
              Subscription Term
            </p>
            <p
              className="text-sm inline m-0 leading-[normal] text-[rgba(248,82,85,1)]"
            >
              *
            </p>
          </div>
        )}
      </div>
    </>
  );
}

SelectTitleField.defaultProps = {
  type: "SELECTED_TYPE",
};

interface SelectTitleFieldProps {
  type: "SELECTED_TYPE" | "SELECTED_TYPE1";
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
