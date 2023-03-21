export default function About() {
  return (
    <>
      <div class=" mx-auto bg-white  shadow-md overflow-hidden md:max-w-fit">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-full md:w-96 lg:w-80 xl:w-fit"
              src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Gaming Photo"
            />
          </div>
          <div class="p-16">
            <div class="uppercase tracking-wide text-3xl text-base-100 font-semibold">
              About Us
            </div>
            <p

              class="block mt-1 text-lg leading-tight font-medium text-black "
            >
              Serving all your GPU needs
            </p>
            <p class="mt-2 text-slate-500 py-6">
              Our team of experts is passionate about technology and has a deep
              understanding of the latest advancements in the GPU industry. We
              are committed to providing you with the best possible customer
              service and ensuring that you find the perfect GPU for your needs.
            </p>
            <p class="mt-2 text-slate-500 pb-6">
              At our store, we offer a wide selection of GPUs, ranging from
              budget-friendly options to high-end models for professionals and
              gamers alike. We understand that each customer has unique needs
              and preferences, which is why we offer a variety of options to
              choose from.
            </p>
            <p class="mt-2 text-slate-500 pb-6">
              We believe that technology should be accessible to everyone, which
              is why we offer competitive prices and regular promotions to make
              our products more affordable. We also offer fast and reliable
              shipping, so you can start enjoying your new GPU as soon as
              possible.
            </p>
            <p class="mt-2 text-slate-500 pb-6">
              Our commitment to customer satisfaction is unwavering, and we are
              always here to answer any questions or concerns you may have.
              Whether you're a seasoned tech enthusiast or a beginner just
              starting to explore the world of GPUs, we are here to help you
              every step of the way.
            </p>
            <p class="mt-2 text-slate-500 pb-6">
              {" "}
              Thank you for choosing our website as your source for GPUs. We
              look forward to serving you and helping you find the perfect GPU
              for your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
