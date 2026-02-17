export default function HomeSection() {
  const years = new Date().getFullYear() - 2021 + 1;
  return (
    <div>
      <p>안녕하세요 
        <span className="ml-1 inline-block origin-[70%_70%] animate-wave">👋🏻</span><br />{years}년 차 프론트엔드 개발자 <strong>박서윤</strong>입니다</p>
      <p>
        <br />
        React, Next.js, TypeScript, Tailwind CSS를 중심으로 웹 서비스를 개발합니다
        <br />
        사용자가 자연스럽게 이해하고 사용할 수 있는 인터페이스를 만드는 데 흥미를 두고
        <br />
        기능 구현을 넘어 흐름과 맥락, 작은 불편함까지 고민합니다
      </p>
      <p>
        <br/>
        누구나 불편함 없이 이용할 수 있는 서비스를 만들기 위해
        <br/>
        프론트엔드 개발자가 할 수 있는 일이 많다고 믿습니다</p>
    </div>
  );
}
