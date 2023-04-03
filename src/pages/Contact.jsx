import './Contact.css';

const Contact = () => {
  return (
    <>
      <div class="contact">
        <div class="contact--map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.2790033544557!2d119.97892301499623!3d16.15455614143614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393dd5c61161b45%3A0x2f07396785280aaa!2sRunway%20Clothing%20Store!5e0!3m2!1sen!2sph!4v1680525104165!5m2!1sen!2sph"
            width="100%"
            height="425"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contact--list">
          <div class="contact__details phone">
            <div class="details--header">
              <svg
                class="details__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>phone</title>
                <path
                  fill="#a02364"
                  d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                />
              </svg>
              <span class="details__heading">Call Us</span>
              <br />
            </div>
            +1 512-128-4888
          </div>
          <div class="contact__details email">
            <div class="details--header">
              <svg
                class="details__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>email</title>
                <path
                  fill="#a02364"
                  d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                />
              </svg>
              <span class="details__heading">Email Us</span>
              <br />
            </div>
            runwayrepublic.business@gmail.com
          </div>
          <div class="contact__details address">
            <svg
              class="details__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 22"
            >
              <title>map-marker</title>
              <path
                fill="#a02364"
                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
              />
            </svg>
            <span class="details__heading">Address</span>
            <br />
            RunwayRepublic Clothing Store, Poblacion Avenue, Alaminos,
            Pangasinan
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
