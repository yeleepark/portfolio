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
  return (
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
  );
}
