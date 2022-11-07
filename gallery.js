const galleryDiv = {
    'wild-update': [
        "https://user-images.githubusercontent.com/76227605/185678108-1cba86a2-756b-4a00-acc3-fbf536175bc7.png", 
        "https://user-images.githubusercontent.com/76227605/185678127-c4bb5e3a-af50-49e5-9174-2a6ae6db00c4.png", 
        "https://user-images.githubusercontent.com/76227605/185397671-4ffce4e0-aaf4-4c93-a9f9-377ec84e2099.png"
    ],
    'refabricated': [
        "https://user-images.githubusercontent.com/76227605/185685589-83c49b4a-ddda-45b7-9b76-c7539b36b211.png",
        "https://user-images.githubusercontent.com/76227605/185685597-408f3f6f-74ca-44a5-8260-9cf6d4e1bad7.png",
        "https://user-images.githubusercontent.com/76227605/185685606-ac3f2e4f-5a84-4e3c-af24-e6af39933f77.png",
        "https://user-images.githubusercontent.com/76227605/185685618-1b791ebe-53fb-480d-b753-c7282c79e4bb.png",
        "https://user-images.githubusercontent.com/76227605/185685636-e7915554-ac17-4222-a8e7-20e3a7fe4aeb.png",
        "https://user-images.githubusercontent.com/76227605/185685654-319d0d20-0972-4548-b4b2-8862b9902057.png",
        "https://user-images.githubusercontent.com/76227605/185685548-6e56311c-1e3b-4fe1-9506-4b62afaa996d.png",
        "https://user-images.githubusercontent.com/76227605/185685514-34473a86-ecd2-439f-a212-2edffe763fd7.png",
        "https://user-images.githubusercontent.com/76227605/174876626-42740eef-85c6-4130-a19d-20b9324b6a89.png",
        "https://user-images.githubusercontent.com/76227605/174876580-de579c83-42d8-4ccb-bf76-0aa1ba88e98c.png",
        "https://user-images.githubusercontent.com/76227605/174876598-0fb9bc52-ba18-47d8-9b3a-d9e0d8ab4631.png",
        "https://user-images.githubusercontent.com/76227605/174876606-4c9cf775-e8fb-4894-92c6-f89ffa8a6556.png",
        "https://user-images.githubusercontent.com/76227605/174876614-e1dd7a4a-dfad-46a0-b921-e19c1a373eb8.png",
        "https://user-images.githubusercontent.com/76227605/174876620-0f172bef-7b64-4aa5-aa46-f643b7ee295c.png",
        "https://user-images.githubusercontent.com/76227605/185685384-aa7e6778-57cd-4cea-9081-cbbac078ef61.png"
    ],
    '1-18-vanilla': [
        "https://user-images.githubusercontent.com/76227605/174876801-a30ee965-de18-4284-b528-35b99994428d.png",
        "https://user-images.githubusercontent.com/76227605/174876769-836ecfc4-cfa7-464e-b0a8-a387c18eadc8.png",
        "https://user-images.githubusercontent.com/76227605/174876679-e3cbf355-0135-435b-9eb4-b3c0e87fa7f4.png",
        "https://user-images.githubusercontent.com/76227605/174876691-de4ea789-5992-46bb-8282-bced9575751a.png",
        "https://user-images.githubusercontent.com/76227605/174876748-e78be69b-e5cb-433d-97c9-0878897d2ba8.png",
        "https://user-images.githubusercontent.com/76227605/174876759-f3c66d20-5b43-40af-a78d-cc22dc94c148.png",
        "https://user-images.githubusercontent.com/76227605/174876714-9fb37fc4-44ae-4bc9-979c-e7230f4b21d3.png",
        "https://user-images.githubusercontent.com/76227605/174876727-53b0d224-ed62-420a-84e6-5f133444a448.png",
        "https://user-images.githubusercontent.com/76227605/174876736-fe66442b-9cdf-4350-838b-a53e25352dc0.png",
        "https://user-images.githubusercontent.com/76227605/174876791-a1a8b1f8-41a0-4572-8ff8-fe7811036024.png"
    ],
    'gotura-art': [
        {
            'src': "https://user-images.githubusercontent.com/76227605/174876897-14db4e5f-45f4-4981-98d4-fc59b482b217.png",
            'classList': ["view-limit"]
        },
        {
            'src':  "https://user-images.githubusercontent.com/76227605/174876845-8c970ab2-5e08-4098-bcbd-fd501aa23ebc.jpg",
            'classList': ["view-limit"]
        },
        {
            'src': "https://user-images.githubusercontent.com/76227605/174876888-5072813f-ccd2-4d07-b7e1-739f47233d33.jpg",
            'classList': ["view-limit", "pixelated"]
        }
    ]
}

function loadGalleries() {
    var galleryObjects = document.getElementsByClassName('gallery');

    for (var gallery of galleryObjects) {
        var galleryName = gallery.id;
        var galleryImgs = galleryDiv[galleryName];

        for (var img of galleryImgs) {
            var imgElement = document.createElement('img');
            if (typeof img === 'string') {
                imgElement.src = img;
            } else if (typeof img === 'object') {
                imgElement.src = img.src;
                for (var className of img.classList) {
                    imgElement.classList.add(className);
                }
            }
            imgElement.loading = 'lazy';
            gallery.appendChild(imgElement);
        }
    }
}