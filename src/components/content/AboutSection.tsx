const Br = () => <br className="hidden lg:block" />;

const about = [
  {
    label: "Education",
    value: "중앙대학교 공연영상창작학부 졸업\n(사진 전공 / 디지털미디어 세부전공)",
  },
  {
    label: "MBTI",
    value: "INTJ",
  },
  {
    label: "Hobby",
    value: "사진 촬영, 헬스",
  },
  {
    label: "Fun Facts",
    value: "사과를 제외한 과일을 못 먹습니다 🍎\n개발자 전직 전 2년간 TVCF 비디오 에디터로 일한 경력이 있습니다 🎬",
  },
];

export default function AboutSection() {
  const years = new Date().getFullYear() - 2021 + 1;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p>
          안녕하세요
          <span className="ml-1 inline-block origin-[70%_70%] animate-wave">
            👋🏻
          </span>
          <br />
          {years}년 차 프론트엔드 개발자 <strong>박서윤</strong>입니다.
        </p>
        <p>
          {`React, Next.js, TypeScript, Tailwind CSS를 중심으로 웹 서비스를 개발합니다. `}
          <Br />
          {`사용자가 자연스럽게 이해하고 사용할 수 있는 인터페이스를 만드는 데 흥미를 두고 `}
          <Br />
          {`기능 구현을 넘어 흐름과 맥락, 작은 불편함까지 고민합니다. `}
        </p>
        <p>
          {`누구나 불편함 없이 이용할 수 있는 서비스를 만들기 위해 `}
          <Br />
          {`프론트엔드 개발자가 할 수 있는 일이 많다고 믿습니다.`}
        </p>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-600" />

      <div className="space-y-5">
        {about.map((item) => (
          <div key={item.label}>
            <h3 className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
              {item.label}
            </h3>
            <p className="text-sm mt-1 whitespace-pre-line">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
