import NavBar from "@/components/common/NavBar";
import { menuLinks } from "@/constants";
import { render, screen, within } from "@testing-library/react";

// 'banner' 역할은 웹 페이지의 상단에 있는 주요 헤더를 나타내는 HTML 요소에 사용

describe("NavBar", () => {
  it("모바일 버전 로고와 이미지가 있어야 한다", () => {
    render(<NavBar />);
    const mobileContainer = screen.getByRole("banner")
      .firstChild as HTMLElement;
    const logo = within(mobileContainer).getByAltText("mobile logo");
    const logoTitle = within(mobileContainer).getByText("ModuBuy");
    expect(logo).toBeInTheDocument();
    expect(logoTitle).toBeInTheDocument();
  });

  it("큰 화면 버전 로고와 이미지가 있어야 한다", () => {
    render(<NavBar />);
    const desktopContainer = screen.getByRole("banner")
      .lastChild as HTMLElement;
    const logo = within(desktopContainer).getByAltText("logo");
    const logoTitle = within(desktopContainer).getByText("ModuBuy");
    expect(logo).toBeInTheDocument();
    expect(logoTitle).toBeInTheDocument();
  });

  it("큰 화면에서 네비게이션 링크를 렌더링한다.", () => {
    render(<NavBar />);
    const desktopContainer = screen.getByRole("banner")
      .lastChild as HTMLElement;
    menuLinks.slice(0, 5).map((menu) => {
      const linkElement = within(desktopContainer).getByRole("link", {
        name: menu.name,
      });

      expect(linkElement).toBeInTheDocument();
    });
  });
});
