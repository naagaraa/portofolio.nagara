import Navbar from "../components/navbarAbout";
import Footer from '../components/footer';
import Image from "next/image";
import Link from 'next/link';

function About() {
  return (
    <div className="container">
      <Navbar />
      <hr className="line mt-5" />

      <h3>Experience</h3>
      <div className="row mt-5">
        <div className="col-md-5">
          <h5>Junior Full Stack Web Developer</h5>
          <span>Jul 2020 - April 2021 1 years</span>
          <p>
            learn and working with laravel 7 or 8 and codeigniter 3, something
            testing apps, find bug or error. it&#39;s not easy, keep harder but yah,
            i keep trying. not only laravel, I learning about clouds, linux like
            vps or for know in alibaba clouds training. and also learning about
            docker container. and also training basic security with checkmarx
          </p>
        </div>
        <div className="col-md-5">
          <h5>backend</h5>
          <p>laravel , codeigniter</p>
          <h5>Operating system</h5>
          <p>Ubuntu, windows 10</p>
          <h5>tools</h5>
          <p>git,docker, putty, ssh, checxmark static scanner, ZAP</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <h5>Intern Full Stack Web Developer</h5>
          <span>April 2020 - June 2020 3 month</span>
          <p>
            I handle app errors and fixing. make a small feature on the company profile like publish and unpublish, Ip visit detected , check web bugs/error. tech used CodeIgniter 3. 
          </p>
        </div>
        <div className="col-md-5">
          <h5>backend</h5>
          <p>codeigniter</p>
          <h5>Operating system</h5>
          <p>windows 10</p>
          <h5>tools</h5>
          <p>vscode, filezilla, git</p>
        </div>
      </div>
      <hr className="line mt-5" />
      
      <h3>Technology</h3>
      <div className="row mt-5">
        <div className="col-md-5">
          <h4>Programing Language</h4>
          <ul>
            <li><h5>PHP 7</h5></li>
            <li><h5>Javascaript</h5></li>
            <li><h5>OOP PHP</h5></li>
            <li><h5>Python</h5></li>
          </ul>
          <h4 className="mt-5" >Framework Backend</h4>
          <ul>
            <li><h5>CodeIgniter</h5></li>
            <li><h5>Laravel</h5></li>
          </ul>
          <h4 className="mt-5">Framework FrontEnd</h4>
          <ul>
            <li><h5>Next Js (Currently learn this one)</h5></li>
            <li><h5>Vue JS (Currently learn this one)</h5></li>
          </ul>
          <h4 className="mt-5">Framework CSS</h4>
          <ul>
            <li><h5>Boostrap 5</h5></li>
          </ul>
        </div>
      </div>
      <hr className="line mt-5" />

      <h3>Sertification</h3>
      <div className="row mt-5">
        <div className="col">
          <h5>IT Essentials: PC Hardware and Software</h5>
          <span>Cisco | Mar 2021</span>
          <p>credentials 
            <Link href="https://www.credly.com/badges/a12a2810-b98c-40ad-bd48-66daa045e59c">
              <a>a12a2810-b98c-40ad-bd48-66daa045e59c</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
              height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Web Security & Bug Bounty : Learn Penetration Testing in 2022</h5>
          <span>Udemy - ZTM | Jan 2021</span>
           <p>credentials 
            <Link href="https://www.udemy.com/certificate/UC-936fc64d-c1aa-448e-a244-2bb6a5f3055e/">
              <a>UC-936fc64d-c1aa-448e-a244-2bb6a5f3055e</a>
            </Link>
            </p>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Application Security and Secure Coding Training course in &#34;Front End Security Basics&#34;</h5>
          <span>checkmark | Agu 2020 - Agu 2021</span>
          <p>credentials 
            <Link href="https://certificates.codebashing.com/frontend_course_certificate_85c50e92d05e071f35773f5ae455ace3de80b466.pdf">
              <a className="overflow-auto" >85c50e92d05e071f35773f5ae455ace3de80b466</a>
            </Link>
          </p>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Application Security and Secure Coding Training course in &#34;HTTP Security Prinsiples&#34;</h5>
          <span>checkmark | Agu 2020 - Agu 2021</span>
           <p>credentials 
            <Link href="https://certificates.codebashing.com/http_course_certificate_c4286cb1a27db31ff9c64cd3e6902dc94b1a2699.pdf">
              <a>c4286cb1a27db31ff9c64cd3e6902dc94b1a2699</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
             width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Application Security and Secure Coding Training course in &#34;PHP&#34;</h5>
          <span>checkmark | Agu 2020 - Agu 2021</span>
           <p>credentials 
            <Link href="https://certificates.codebashing.com/php_course_certificate_3d67ada11ddc4089d589e5dc77091f3dd00ba3d6.pdf">
              <a>3d67ada11ddc4089d589e5dc77091f3dd00ba3d6</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h5>Introduction to IoT</h5>
          <span>Cisco | Des 2020</span>
           <p>credentials 
            <Link href="https://www.credly.com/badges/6a2bf2b5-abae-4ff5-9ba1-820b870ac744?source=linked_in_profile">
              <a>6a2bf2b5-abae-4ff5-9ba1-820b870ac744</a>
            </Link>
          </p>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>CCNA R&S :Introduction to Networks</h5>
          <span>Cisco | Jul 2020</span>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Architecting on AWS</h5>
          <span>Dicoding | Nov 2021 - Nov 2024</span>
           <p>credentials 
            <Link href="https://www.dicoding.com/certificates/MRZMKV1Y3PYQ">
              <a>MRZMKV1Y3PYQ</a>
            </Link>
          </p>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Clouds Practioner Essentials</h5>
          <span>Dicoding | Sep 2021 - Sep 2024</span>
           <p>credentials 
            <Link href="https://www.dicoding.com/certificates/53XEWDQGYXRN">
              <a>53XEWDQGYXRN</a>
            </Link>
          </p>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Full Stack Designer</h5>
          <span>Build With Angga | April 2020 - June 2020 3 month</span>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Belajar Dasar Visualisasi Data</h5>
          <span>Dicoding | Mei 2021 - Mei 2024</span>
          <p>credentials 
            <Link href="https://www.dicoding.com/certificates/EYX4R5V26XDL">
              <a>EYX4R5V26XDL</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Memulai Pemrograman Dengan Python</h5>
          <span>Dicoding | Mar 2020 - Mar 2023</span>
          <p>credentials 
            <Link href="https://www.dicoding.com/certificates/KEXL4W19RXG2">
              <a>KEXL4W19RXG2</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Belajar Membuat Aplikasi Android untuk Pemula</h5>
          <span>Dicoding | Sep 2019 - sep 2022</span>
          <p>credentials 
            <Link href="https://www.dicoding.com/certificates/1OP8DOW5QPQK">
              <a>1OP8DOW5QPQK</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Belajar Dasar Pemrograman Web</h5>
          <span>Dicoding | Jun 2019 - Jun 2022</span>
           <p>credentials 
            <Link href="https://www.dicoding.com/certificates/N9ZODRM40PG5">
              <a >N9ZODRM40PG5</a>
            </Link>
          </p>
        </div>
        <div className="col">
           {/* <Image
              className="img-thumbnail"
              src="/sertif/it-essentials.png"
              alt="sertificate"
              width={250}
               height={150}
            /> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Peserta Olimpiade Sains Nasional tingkat kabupaten bekasi</h5>
          <span>Kabupaten Bekasi | Feb 2016</span>
        </div>
        <div className="col">
          {/* <Image
              className="img-thumbnail"
              src="/sertif/olimpiade-komputer.png"
              alt="sertificate"
              width={250}
              height={150}
            /> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
