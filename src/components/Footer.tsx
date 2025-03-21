import lzicon from "@/assets/lzicon.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img 
              src={lzicon}
              alt="Lazyfield Icon"
              className="w-8 h-8 mr-2"
            />
            Lazyfield
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/FYUDerma/Lazyfield"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Team
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Landing page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/zakaria-aattache/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Zakaria AATTACHE 
          </a>
          <span> and </span>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/beno%C3%AEt-marin/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
             Benoit MARIN
          </a>
        </h3>
      </section>
    </footer>
  );
};
