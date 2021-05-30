import React,{useState} from 'react'
import classes from '../styles/HomePage/Gallery.module.scss'
import ReactBnbGallery from 'react-bnb-gallery'



const Gallery = () => {

    const [galleryOpened,setGalleryOpened] = useState(false)

    const toggleGallery = () => setGalleryOpened(!galleryOpened)

    

    const photos = []

    for (let i=1 ; i<=95 ; i++) {
        photos.push({
            photo: `/HomePageImages/${i}.jpg`,
            caption: "",
            subcaption: "",
            thumbnail: `/HomePageImagesLow/${i}_low.jpg`
        })
    }

    const [galleryPhotos,setGalleryPhotos] = useState(photos)

    const openGallery = (url) => {
        console.log(url)
        const index = photos.findIndex(photo => photo.photo == url)
        photos.splice(index,1)
        const splitPath = url.split("/")
        console.log(splitPath)
        photos.unshift({
            photo: url,
            caption: "",
            subcaption: "",
            thumnnail: `/${splitPath[0]}/${splitPath[2].split(".")[1]}_low.jpg`
        })

        setGalleryPhotos(photos)

        toggleGallery()
    }

    return (
        <section className={classes.gallery}>
            <h2 id='gallery' className={classes.gallery__title}>Galeria</h2>
                <div className={classes.gallery__wrapper}>
                    <img onClick={() => openGallery("/HomePageImages/12.jpg")} src="/HomePageImages/12.jpg" className={classes.img} alt="img" />
                    <img onClick={() => openGallery("/HomePageImages/1.jpg")} src="/HomePageImages/1.jpg" className={classes.img} alt="img" />
                    <img onClick={() => openGallery("/HomePageImages/33.jpg")} src="/HomePageImages/33.jpg" className={classes.img} alt="img" />
                    <img onClick={() => openGallery("/HomePageImages/66.jpg")} src="/HomePageImages/66.jpg" className={classes.img} alt="img" />
                </div>
                <button className={classes.gallery__button} onClick={toggleGallery}>Zobacz całą galerię</button> 
                <ReactBnbGallery
                    show={galleryOpened}
                    photos={galleryPhotos}
                    onClose={toggleGallery}
                 />           
            </section>
    )
}

export default Gallery