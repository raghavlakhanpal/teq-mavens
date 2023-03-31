import { useSelector } from "react-redux";

const Dashboard = () => {
  const userName = useSelector((state) => state.user.email);
  return (
    <div className="dashboard">
      <h1>{`Welcome User: ${userName}`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam
        aspernatur sunt necessitatibus. Rem, recusandae repudiandae
        exercitationem magnam quis necessitatibus natus vero non placeat
        perferendis doloremque soluta beatae sunt commodi. Officia doloremque
        enim, modi explicabo ea placeat beatae, deleniti, est itaque velit
        perspiciatis dolores quaerat veritatis quisquam? Obcaecati doloremque in
        ad sequi corrupti blanditiis adipisci repellendus beatae, earum corporis
        exercitationem? Harum quae similique aspernatur, facere provident quis
        recusandae corporis repudiandae ea laudantium, doloribus perferendis ex
        facilis natus eveniet rerum sapiente? Ratione beatae modi vero inventore
        itaque autem id fugit veritatis! Cupiditate repellendus animi similique
        aliquam repellat atque! Numquam modi adipisci quidem earum et maiores
        alias itaque, necessitatibus unde, distinctio totam voluptatem molestiae
        odio ab deleniti minus nulla, fuga magni! Eveniet? Accusamus aliquid
        deleniti optio natus ut porro officia, explicabo, consequuntur nulla a
        eum perspiciatis eveniet laudantium debitis enim autem quia est.
        Cupiditate error optio voluptatem cum odit accusamus labore eum!
        Veritatis reprehenderit impedit expedita totam sapiente inventore ipsum
        sunt? Reprehenderit earum, quia aliquam rem consectetur velit officiis
        obcaecati dolorem ipsa cum odio amet, eaque debitis, aut deserunt
        ducimus quam voluptatibus. Eveniet nostrum itaque expedita fugiat
        veritatis blanditiis, sint enim repudiandae necessitatibus iusto tenetur
        commodi minima officia soluta dolor modi dolorum eius quis accusantium
        sapiente libero voluptate, praesentium officiis ratione? Magnam. Aliquam
        harum assumenda, eaque illo aut velit officiis? Voluptatum temporibus ex
        libero, rem enim rerum quo nam ea ipsam reiciendis eum quia eaque magni,
        quas consequuntur assumenda totam aliquam velit. Illum ea possimus quo
        magnam obcaecati. Autem doloribus quibusdam cumque voluptatem iste totam
        necessitatibus tenetur ipsum atque fuga velit provident, nulla nostrum
        quidem, corporis itaque, ex voluptas quis qui quisquam. Sunt ducimus,
        exercitationem, quos tenetur earum doloremque aut, ex itaque repellendus
        architecto distinctio optio. Possimus cumque quis, totam soluta
        explicabo quaerat, et id aspernatur iure sit sequi repudiandae. Placeat,
        magnam?
      </p>
    </div>
  );
};
export default Dashboard;
