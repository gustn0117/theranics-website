import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col justify-center py-32">
      <p className="display text-8xl text-lime">404</p>
      <h1 className="display mt-4 text-3xl sm:text-4xl">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-ink-soft">주소가 잘못되었거나 삭제된 페이지입니다.</p>
      <div className="mt-8">
        <ButtonLink href="/">메인으로 돌아가기</ButtonLink>
      </div>
    </section>
  );
}
