import Description from "./content/Description";
import Tasks from "./content/Tasks";

export default function Content() {
  return (
    <>
      <div className="flex flex-col pl-8 pr-16 pt-16">
        <Description />
        <Tasks />
      </div>
    </>
  );
}
