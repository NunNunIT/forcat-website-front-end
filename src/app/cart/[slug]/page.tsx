export default function Slug({ params }: { params: { slug: string } }) {
  fetch("https://randomuser.me/api/", {
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return <main>{params.slug}</main>;
}
