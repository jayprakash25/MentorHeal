import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ReadFull() {
  const data = useLocation();

  const { image, Tittle, Para } = data.state;

  return (
    <>
    <NavBar/>
      <main>
        <div className="pt-24 space-y-9 mx-16 flex flex-col justify-center items-center"><
          <h1 className="text-2xl font-bold lg:text-3xl max-w-xl lg:tedxt-3xl leading-9">
            {Tittle}
          </h1>
          <img
            className="max-w-md md:max-w-4xl md:mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5 px-7 pt-9 pb-10 lg:max-w-4xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            corrupti ipsam at blanditiis nesciunt accusantium beatae, iste, eum
            maiores praesentium a consectetur distinctio, deleniti provident
            iure quam aperiam fugit natus consequuntur ullam vitae rerum nihil
            dolor sapiente. Repellat quod modi alias vero ea eligendi error
            quaerat consequatur harum odio eius, voluptate vitae similique
            quidem distinctio nisi amet dolor fugiat eaque delectus. Iste id,
            quidem officiis vel minima omnis dolor dicta veritatis debitis
            doloremque, nulla voluptate veniam tempora et aliquid sed culpa
            impedit quae laborum eaque, voluptas voluptatum itaque vero.
            Blanditiis odit sed numquam esse ipsam exercitationem, quod id
            tenetur vel voluptatum impedit assumenda quo veritatis vitae
            adipisci pariatur sunt soluta quis optio iusto possimus tempore
            incidunt doloribus quia! Sint magni illum ratione id aliquam
            dolores. Cupiditate minima consequatur exercitationem dolore, nihil
            a explicabo sit incidunt tenetur quaerat, distinctio omnis nostrum,
            tempore nam dolorem odit aut mollitia numquam vitae quae quam.
            Sapiente, iusto exercitationem. Minima ex iure accusamus distinctio
            assumenda totam unde quisquam eum architecto dicta veritatis,
            reiciendis laudantium officiis perspiciatis illum amet optio
            deserunt voluptates id beatae, tempore praesentium quod? Debitis
            nesciunt omnis sit. Tempore repudiandae ad sint cumque aperiam eius
            non debitis repellat ut est doloremque dignissimos, facilis quaerat
            dicta? Et quas autem aut ab quod? Esse et adipisci labore veniam
            quibusdam laboriosam ratione. Fugiat cumque eum voluptatum officiis
            repellat neque sunt explicabo quia aspernatur sapiente quos rem enim
            assumenda accusantium velit, ratione dolor minima nam eaque!
          </p>
          <p>
            eligendi voluptatibus deserunt ut odio quidem! Explicabo fugit
            distinctio repudiandae repellat corrupti cupiditate iusto, iste
            autem veritatis perspiciatis? Voluptatibus pariatur omnis possimus
            delectus rerum porro in iusto voluptatum illum corporis quis nihil
            itaque sed officiis, labore praesentium esse deleniti! Facilis
            dolorum sit quidem fugiat eveniet soluta. Labore odit, odio quam ea
            atque nesciunt omnis sit. Tempore repudiandae ad sint cumque aperiam
            eius non debitis repellat ut est doloremque dignissimos, facilis
            quaerat dicta? Et quas autem aut ab quod? Esse et adipisci labore
            veniam quibusdam laboriosam ratione. Fugiat cumque eum voluptatum
            officiis repellat neque sunt explicabo quia aspernatur sapiente quos
            rem enim assumenda accusantium velit, ratione dolor minima nam eaque
            accusamus expedita porro. Corporis assumenda voluptatibus ducimus
            fugit possimus impedit nisi recusandae aliquam veritatis officia
            ipsam iure corrupti distinctio iste beatae debitis quisquam sit,
            obcaecati rerum quia repellendus eum voluptates. Repellendus ipsam
            accusantium provident ad ut itaque deleniti modi sapiente eveniet
            ea. Ipsam temporibus deleniti quaerat itaque fuga corporis
            cupiditate exercitationem quibusdam harum facere saepe illum
            suscipit commodi sed, ducimus odio voluptatem similique. Impedit
            voluptatum explicabo quis possimus asperiores! Totam quis, dolorem
            eius est temporibus neque repellendus sapiente ea debitis sequi? Quo
            sapiente error esse placeat debitis non itaque praesentium ullam
            delectus, accusantium consequuntur nostrum. Natus nihil temporibus
            ipsum doloribus laborum quae labore
          </p>
          <p>
            dignissimos id iste molestiae ad repellendus, magni a amet. Veniam
            magnam quia aperiam suscipit debitis dolore, ab impedit corporis
            quis similique recusandae? Esse, aut! Numquam, suscipit? Tenetur
            labore quaerat a impedit deserunt minus optio ipsum porro saepe
            enim, delectus perferendis nihil hic natus nisi eaque ab? Quas,
            saepe? Rerum a, in qui expedita minima, magni atque quis, voluptates
            aut aspernatur officiis alias eius optio ullam. Ipsum quam aut
            placeat in dolor eius explicabo maxime ut vero illo, quasi
            accusamus, amet, aliquam voluptatem! Voluptas, sint quis quasi quae
            nostrum minima eum quidem. Hic beatae laborum reiciendis repellat
            modi temporibus doloribus veniam dolore voluptate placeat
            consequuntur, veritatis accusamus incidunt eligendi voluptatibus
            deserunt ut odio quidem! Explicabo fugit distinctio repudiandae
            repellat corrupti cupiditate iusto, iste autem veritatis
            perspiciatis? Voluptatibus pariatur omnis possimus delectus rerum
            porro in iusto voluptatum illum corporis quis nihil itaque sed
            officiis, labore praesentium esse deleniti! Facilis dolorum sit
            quidem fugiat eveniet soluta. Labore odit, odio quam ea atque
          </p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
