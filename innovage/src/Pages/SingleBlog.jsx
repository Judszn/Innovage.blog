import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import SideBar from "../Components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Enjoy Reading.
        </h2>
      </div>
      {/* blo details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} |{published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <hr className="mb-5" />
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              tenetur sequi fuga hic, ut mollitia natus assumenda ab amet,
              similique voluptatem reprehenderit voluptas, illo temporibus error
              delectus consequuntur eligendi. Laudantium. Quo, quae inventore at
              molestiae magni cumque consequuntur deleniti esse dignissimos sed
              nostrum earum voluptates architecto odio doloremque. Corrupti
              laborum, debitis qui magni distinctio maxime quod rerum porro
              deserunt quidem. Qui, architecto ipsa deleniti minus adipisci
              incidunt maxime dolore distinctio debitis, expedita tempora
              consequatur vero ipsam impedit atque temporibus facere ea ducimus
              natus. Sequi soluta assumenda, eius vel deserunt incidunt! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Labore iusto
              sit cupiditate, optio, provident saepe possimus ducimus quas nisi
              nam officia quod aliquam, distinctio sapiente nulla! Accusantium
              recusandae mollitia hic. Fuga dicta libero ex corporis porro.
            </p>
            <br />
            <p>
              Voluptas quia molestiae laboriosam culpa illum, veritatis
              accusamus eveniet necessitatibus rerum ipsum, beatae accusantium,
              aspernatur facere corrupti non nam! Deleniti culpa sequi corrupti
              placeat? Esse molestiae quidem explicabo excepturi architecto,
              asperiores non rerum magni veritatis adipisci cum praesentium sint
              illo. Iste, obcaecati ducimus blanditiis exercitationem architecto
              quasi, voluptas temporibus eligendi id nulla odit inventore.
              Blanditiis laborum et laboriosam repellat, tenetur laudantium. Est
              esse ullam dolorum! Illo similique perspiciatis quod animi ullam
              velit, deleniti eius libero repellendus nisi. Recusandae mollitia
              nostrum eius, at sint dicta! Distinctio praesentium laborum
              cupiditate, voluptates atque nostrum ipsam, eum ipsum laboriosam
              necessitatibus voluptatum neque non, nulla voluptate rerum
              molestiae deleniti perspiciatis excepturi omnis magni. Unde fugiat
              optio ex doloremque deserunt.
            </p>
            <br />
            <p>
              Voluptas quia molestiae laboriosam culpa illum, veritatis
              accusamus eveniet necessitatibus rerum ipsum, beatae accusantium,
              aspernatur facere corrupti non nam! Deleniti culpa sequi corrupti
              placeat? Esse molestiae quidem explicabo excepturi architecto,
              asperiores non rerum magni veritatis adipisci cum praesentium sint
              illo. Iste, obcaecati ducimus blanditiis exercitationem architecto
              quasi, voluptas temporibus eligendi id nulla odit inventore.
              Blanditiis laborum et laboriosam repellat, tenetur laudantium. Est
              esse ullam dolorum! Illo similique perspiciatis quod animi ullam
              velit, deleniti eius libero repellendus nisi. Recusandae mollitia
              nostrum eius, at sint dicta! Distinctio praesentium laborum
              cupiditate, voluptates atque nostrum ipsam, eum ipsum laboriosam
              necessitatibus voluptatum neque non, nulla voluptate rerum
              molestiae deleniti perspiciatis excepturi omnis magni. Unde fugiat
              optio ex doloremque deserunt.
            </p>
            <br />
          </div>
          <hr className="mt-10" />
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
