import React, { forwardRef } from "react";

const ComponentToPrint = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2 className="border-2 border-black">RADNI NALOG</h2>
      <p className="bg-slate-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vel
        dicta, autem accusantium alias officiis quos cupiditate earum beatae,
        temporibus deserunt aperiam. Repellendus aperiam quia autem id ducimus.
        Odit delectus corporis harum nemo fugiat facere aut enim nulla deleniti
        obcaecati. Consectetur obcaecati, saepe, ad facere repellat aperiam ut
        cupiditate odio recusandae provident amet quod, ratione suscipit minima
        molestias voluptatibus dolore! Vero facilis nemo exercitationem nisi
        fugiat minus voluptates architecto sequi iste? Quo quam, minus dolore
        nobis deserunt placeat sunt corporis! Officiis hic suscipit iure id
        doloribus tenetur amet aspernatur voluptatem ut corrupti nemo atque
        nobis numquam itaque mollitia quod reiciendis, fuga ipsum impedit omnis
        ipsa recusandae? Voluptas nostrum voluptatibus tenetur eaque itaque!
        Corporis sed perferendis enim vitae maiores veritatis est, maxime
        voluptatem ipsum ipsam, ea possimus, rerum ratione delectus sit aut
        voluptatum molestiae! Illum sint quibusdam, impedit sed, laborum amet
        dolore accusantium nemo autem excepturi blanditiis fugiat at
        consequuntur! Cumque vitae perspiciatis, iusto reiciendis quod officiis
        ad corporis magnam asperiores reprehenderit quisquam facilis doloremque
        itaque. Alias rem tenetur aliquam numquam laborum cum veritatis odit,
        doloribus adipisci repudiandae, porro ratione possimus animi rerum
        officia consectetur illo sequi omnis labore at voluptatibus. Voluptate
        illo nemo amet error reiciendis incidunt repellat modi voluptas.
      </p>
    </div>
  );
});

export default ComponentToPrint;
