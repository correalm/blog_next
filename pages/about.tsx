import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="Sobre"
        description="Fiz esse blog com a finalidade de guardar algumas notas sobre programação..."
      >
        <Prose>
          <p>
            Primeiro gostaria de dizer que a arquitetura desse blog não foi feita por mim.
            Isto é um clone de:
          </p>
          <a href="https://github.com/alexcarpenter/nextjs-mdx-blog-theme">esse repositório aqui!</a>

          <hr />
          <h3>
            O único propósito é guardar algumas notas sobre meu trabalho e dia a dia como programador.
          </h3>
          <hr />

          <label>
            Obrigado por ler.
          </label>
        </Prose>
      </Page>
    </>
  );
};

export default About;
