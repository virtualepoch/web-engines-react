import { TutLayout } from "../../components/TutLayout";
import { MixBlendMode } from "../../components/MixBlendMode";
import "./mix-blend-mode-tut.css";

export function MixBlendModeTut() {
  const tutInfo = [
    {
      title: "Mix Blend Mode Tut",
      subtitle: "We apologize but this tut is currently being updated.",
      effectEx: <MixBlendMode />,
      dateUpdated: "",
      minsReadTime: "5",
      codeExs: [
        `<div class="">
  <div class=""></div>
</div>`,
`. {
}
      
      . {
      }`,
      ],
    },
  ];

  return (
    <>
      {tutInfo.map((item) => (
        <TutLayout key={item.title} info={item} />
      ))}
    </>
  );
}
