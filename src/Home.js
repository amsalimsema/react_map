import Records from "./records.json";

export default function Home() {
  return (
    <>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id} className="record_main">
              <div>
                <img src={record.img} alt="food" />
                <br />
                {record.title}
                <br />
                {record.content}
                <br />
              </div>

              {/* {record.tech &&
                record.tech.map((data) => {
                  return <div key={record.id}>==={data.name}======</div>;
                })} */}
            </div>
          );
        })}
    </>
  );
}
