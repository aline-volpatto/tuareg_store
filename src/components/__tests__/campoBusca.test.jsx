// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import CampoBusca from "../atoms/CampoBusca/CampoBusca";

afterEach(() => {
  cleanup();
});

describe("CampoBusca", () => {
  it("renderiza o campo de busca com rótulo acessível", () => {
    render(<CampoBusca valor="" aoMudar={() => {}} />);

    const campo = screen.getByRole("searchbox", {
      name: "O que você está procurando?",
    });

    expect(campo).toBeTruthy();
  });

  it("mostra o valor recebido por props", () => {
    render(<CampoBusca valor="mehari" aoMudar={() => {}} />);

    const campo = screen.getByRole("searchbox");

    expect(campo.value).toBe("mehari");
  });

  it("chama aoMudar com o texto digitado", () => {
    const aoMudar = vi.fn();
    render(<CampoBusca valor="" aoMudar={aoMudar} />);

    const campo = screen.getByRole("searchbox");
    fireEvent.change(campo, { target: { value: "camiseta" } });

    expect(aoMudar).toHaveBeenCalledTimes(1);
    expect(aoMudar).toHaveBeenCalledWith("camiseta");
  });
});