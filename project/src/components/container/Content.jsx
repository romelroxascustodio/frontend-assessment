import image from '../../assets/images/400x300.jpg';

export default function Content() {

  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
  ];

  return (
    <>
        <section className="content">
          <div className="content__container max-w-7xl mx-auto">
            <div className="content__row">
            {data.map((data, index) => (
              <div className="content__column w-full sm:w-7/12 lg:w-4/12" key={data + index}>
                <div className="content__card shadow">
                  <div className="content__header">
                    <img src={image} className="content__image" alt="..." />
                  </div>
                  <div className="content__body">{data.text}</div>
                  <div className="content__footer">
                    <a href="/" className='content__button'>Read More</a>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
    </>
  )
}
