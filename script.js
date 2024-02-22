
        const imagesData = [
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
            {"image": "./Images/Img1.png"},
            {"image": "./Images/Img2.png"},
            {"image": "./Images/Img3.png"},
            {"image": "./Images/Img4.png"},
        ];

        function loadImages() {
            const container = document.getElementById('image-container');

            imagesData.forEach(data => {
                const img = document.createElement('img');
                img.src = data.image;
                img.classList.add('m-4'); 
                img.loading = 'lazy'; 
                container.appendChild(img);
            });
        }

        window.addEventListener('load', loadImages);
