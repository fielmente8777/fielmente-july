import { SectionWithContainer } from "@/components";

interface MilestoneProps {
  stats: { value: string; label: string }[];
}
const Milestone: React.FC<MilestoneProps> = ({ stats }) => {
  return (
    <SectionWithContainer>
      <div className="bg-primary2 md:rounded-[20px] rounded-2xl px-4 py-6 md:p-12 box-shadow">
        <div className="grid grid-cols-2 xl:grid-cols-4 text-white xl:divide-x-2 max-xl:gap-10 max-md:gap-4 divide-tertiary">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:space-y-4 space-y-2.5">
              <p className="text-2xl md:text-5xl font-medium">{stat.value}</p>
              <p className="md:text-2xl text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Milestone;
