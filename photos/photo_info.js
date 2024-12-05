const pellett_desc = `\
The RAWs were then imported into Photoshop and aligned with the moon in the very center of the image, and cropping was done to clean up the messy edges. \
I combined the aligned images into a smart object, and used the "Mean" stack mode to average out all of the images. \
The Pellett method was used to extract fine coronal detail from the averaged out stack. \
I then used Adobe Camera Raw to adjust simple things such as exposure and shadows, and I then moved on to editing out dust specks and noise. \
Various other color corrections were done, including some to remove green tints around the solar prominences. `
const sky_color_desc = `Adobe Camera Raw was also used to adjust the color of the sky to a deep blue color, which more closely resembles what I saw with my own eyes.`;
const sun_adjust_desc = `The sun was shot using Baader AstroSolar Film in white light. \
However, I slightly adjusted the color to make the sun appear more orange, as we are accustomed to seing in photographs.`

const photo_info = {
    totality: {
        img: '../img/totality.jpg',
        title: 'Totality',
        title_lesser: 'Main Totality Image',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            The star system Zeta Piscium is easily visible to the left of the eclipse. \
            Several high pass filters were used to extract the coronal structure while not adding excessive detail. \
            ${sky_color_desc} \
            Other common adjustments were made to touch up the final image, such as exposure, contrast, shadows, noise reduction, etc.`,
        metadata: [
            ['Date', '8 April 2024 at 15:03:10-04:00 thru 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7210.NEF thru DSC_7256.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    totality_earthshine: {
        img: '../img/totality_earthshine.jpg',
        title: 'Totality',
        title_lesser: 'Main Totality Image with Earthshine',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            The star system Zeta Piscium is easily visible to the left of the eclipse. \
            Several high pass filters were used to extract the coronal structure while not adding excessive detail. \
            ${sky_color_desc} \
            Other common adjustments were made to touch up the final image, such as exposure, contrast, shadows, noise reduction, etc. <br><br>\
            I also carefully extracted the faint features of the moon from a single raw exposure, which is made possible with earthshine (sunlight reflected off of Earth's surface and back up towards the moon). \
            It's not perfect, because I don't have expensive gear that would have made it even more clear, and the amount of noise on the moon is unfortunately inevitable.`,
        metadata: [
            ['Date', '8 April 2024 at 15:03:10-04:00 thru 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Earthshine Exposure', '1s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7210.NEF thru DSC_7256.NEF'],
            ['Earthshine Raw File Reference', 'DSC_7253.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    totality_earthshine_bright: {
        img: '../img/totality_earthshine_bright.jpg',
        title: 'Totality',
        title_lesser: 'Main Totality Image with Earthshine (Bright)',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            The star system Zeta Piscium is easily visible to the left of the eclipse. \
            Several high pass filters were used to extract the coronal structure while not adding excessive detail. \
            ${sky_color_desc} \
            Other common adjustments were made to touch up the final image, such as exposure, contrast, shadows, noise reduction, etc. <br><br>\
            I also carefully extracted the faint features of the moon from a single raw exposure, which is made possible with earthshine (sunlight reflected off of Earth's surface and back up towards the moon). \
            It's not perfect, because I don't have expensive gear that would have made it even more clear, and the amount of noise on the moon is unfortunately inevitable. <br><br>\
            This version features a lighter moon color than the other earthshine composite.`,
        metadata: [
            ['Date', '8 April 2024 at 15:03:10-04:00 thru 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Earthshine Exposure', '1s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7210.NEF thru DSC_7256.NEF'],
            ['Earthshine Raw File Reference', 'DSC_7253.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    visual_corona_color: {
        img: '../img/visual_corona_color.png',
        title: 'Totality',
        title_lesser: 'Visual Corona in Color',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            ${pellett_desc}${sky_color_desc} \
            This image was an attempt to recrate the coronal structure as viewed by the naked eye.`,
        metadata: [
            ['Date', '8 April 2024 at 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7256.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    zoomed_out_corona_better: {
        img: '../img/zoomed_out_corona_better.jpg',
        title: 'Totality',
        title_lesser: 'Zoomed Out Corona in Color',
        description: `\
            This image is an HDR stack of 29 different bracketed exposures during totality, with shutter speeds ranging from 1/250 to 2s. \
            All of the images were taken right in the middle of the totality window, at max eclipse. \
            ${pellett_desc}${sky_color_desc}`,
        metadata: [
            ['Date', '8 April 2024 at 15:04:40-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/250 - 2s, f/8, ISO 200'],
            ['Focal Length', '200mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7257.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    HDR_moon: {
        img: '../img/HDR_moon.png',
        title: 'Moon',
        title_lesser: 'HDR Crescent Moon Composite',
        description: `\
            This image is an HDR composite of 3 different images of the moon. \
            A photo of the full moon was taken on 25 March 2024, and photos of the crescent moon and its glow were taken on 14 March. \
            These were then all overlaid in photoshop to create the image above. \
            This photo was only practice for me, which is why I used moon photos from different dates. Usually that would go against my photography morals. \
            Lunar libration also made it so that the crescent and full moon features did not align perfectly.`,
        metadata: [
            ['Crescent Moon Date', '14 March 2024 at 20:57:28-04:00'],
            ['Full Moon Date', '25 March 2024 at 01:52:56-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Crescent Moon Exposure', '1/80, f/5.6, ISO 200'],
            ['Full Moon Exposure', '1/2000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_4025.NEF (Crescent) and DSC_4726.NEF (Full)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    eclipse_smileyface: {
        img: '../img/eclipse_smileyface.png',
        title: 'Full Eclipse Composite',
        title_lesser: 'Eclipse Smiley Face',
        description: `\
            This image is fun composite of 3 different images during the total solar eclipse on 8 April 2024. \
            The two diamond rings at C2 and C3 were put together in a Photoshop document to represent eyes, and a very slim sun partial phase photo represents a smile. \
            Only basic image correction was used, such as noise reduction, exposure adjustments, and color correction. \
            This image was inspired by Dr. Sebastian Voltmer. His photo can be found on <a href="https://www.instagram.com/p/C5v5gZCMDfC">Instagram</a>.`,
        metadata: [
            ['Left Eye Date', '8 April 2024 at 15:02:36-04:00'],
            ['Right Eye Date', '8 April 2024 at 15:07:06-04:00'],
            ['Smile Date', '8 April 2024 at 15:11:00-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Left Eye Exposure', '1/2500, f/8, ISO 200'],
            ['Right Eye Exposure', '1/1000, f/8, ISO 200'],
            ['Smile Exposure', '1/2500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7183.NEF (Left Eye), DSC_7305.NEF (Right Eye), and DSC_7335.NEF (Smile)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    totality_raw: {
        img: '../img/totality_raw.jpg',
        title: 'Totality',
        title_lesser: 'Raw Totality Image',
        description: `\
            This image is a RAW taken straight off of the camera. \
            No editing has been done to exposure, colors, noise, imperfections, or anything else.`,
        metadata: [
            ['Date', '8 April 2024 at 15:03:59-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/20, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7239.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    prominences: {
        img: '../img/prominences.jpg',
        title: 'Totality',
        title_lesser: 'Solar Prominences',
        description: `\
            This is an image of the solar prominences taken right before the end of totality. \
            The majestic tent-shaped prominence visible on the southern edge of the lunar limb is clearly visible, among others. \
            Minimal editing has been done, with the only adjustments being exposure, contrast, shadows, noise reduction, etc.`,
        metadata: [
            ['Date', '8 April 2024 at 15:06:46-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/5000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7295.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    beads_composite_realistic: {
        img: '../img/beads_composite_realistic.jpg',
        title: 'Totality',
        title_lesser: "Bailey's Beads Composite - True Orientation",
        description: `\
            This is a composite of the C2 and C3 Bailey's Beads sequences. \
            Each component of this composite is aligned based on how I saw it in the sky, with C2 being near the 11 o'clock position and C3 being near the 4 o'clock position. \
            The reason for C3 having a much larger glare is because a thin cirrus cloud layer moved in front of totality right near the end, making shooting conditions more hazy. \
            Minimal editing has been done, with the only adjustments being exposure, contrast, shadows, noise reduction, etc.`,
        metadata: [
            ['C2 Date', '8 April 2024 at 15:02:44-04:00 thru 15:02:54-04:00'],
            ['Totality Date', '8 April 2024 at 15:03:16-04:00'],
            ['C3 Date', '8 April 2024 at 15:06:58-04:00 thru 15:07:10-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['C2 Exposure', '1/2500, f/8, ISO 200'],
            ['Totality Exposure', '1/4000, f/8, ISO 200'],
            ['C3 Exposure', '1/1000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7188.NEF thru DSC_7195.NEF (C2), DSC_7213.NEF (Totality), DSC_7299.NEF thru DSC_7306.NEF (C3)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    beads_composite_horizontal: {
        img: '../img/beads_composite_horizontal.jpg',
        title: 'Totality',
        title_lesser: "Bailey's Beads Composite - Horizontal Orientation",
        description: `\
            This is a composite of the C2 and C3 Bailey's Beads sequences. \
            Unlike the other beads composite, this one has been rotated to make the image more visually pleasing and uniform, by making everything align horizontally. \
            C2 is on the left, and C3 is on the right. \
            The reason for C3 having a much larger glare is because a thin cirrus cloud layer moved in front of totality right near the end, making shooting conditions more hazy. \
            Minimal editing has been done, with the only adjustments being exposure, contrast, shadows, noise reduction, etc.`,
        metadata: [
            ['C2 Date', '8 April 2024 at 15:02:44-04:00 thru 15:02:54-04:00'],
            ['Totality Date', '8 April 2024 at 15:03:16-04:00'],
            ['C3 Date', '8 April 2024 at 15:06:58-04:00 thru 15:07:10-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['C2 Exposure', '1/2500, f/8, ISO 200'],
            ['Totality Exposure', '1/4000, f/8, ISO 200'],
            ['C3 Exposure', '1/1000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7188.NEF thru DSC_7195.NEF (C2), DSC_7213.NEF (Totality), DSC_7299.NEF thru DSC_7306.NEF (C3)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    diamond_ring_diagonal_composite: {
        img: '../img/diamond_ring_diagonal_composite.png',
        title: 'Totality',
        title_lesser: "Diamond Rings Composite - Diagonal Orientation",
        description: `\
            This is a diagonal composite of the C2 and C3 diamond rings. \
            C2 is on the top left, and C3 is on the bottom right. \
            The reason for C3 having a much larger glare is because a thin cirrus cloud layer moved in front of totality right near the end, making shooting conditions more hazy. \
            Minimal editing has been done, with the only adjustments being exposure, contrast, shadows, noise reduction, etc.`,
        metadata: [
            ['C2 Date', '8 April 2024 at 15:02:36-04:00'],
            ['Totality Date', '8 April 2024 at 15:03:16-04:00'],
            ['C3 Date', '8 April 2024 at 15:07:04-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['C2 Exposure', '1/2500, f/8, ISO 200'],
            ['Totality Exposure', '1/4000, f/8, ISO 200'],
            ['C3 Exposure', '1/1000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7183.NEF (C2), DSC_7213.NEF (Totality), DSC_7302.NEF (C3)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    visual_corona_monochrome: {
        img: '../img/visual_corona_monochrome.png',
        title: 'Totality',
        title_lesser: 'Visual Corona in Monochrome',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            ${pellett_desc} No color correction has been done to the sky on this image. \
            This image was an attempt to recrate the coronal structure as viewed by the naked eye.`,
        metadata: [
            ['Date', '8 April 2024 at 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7256.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    totality_inverted: {
        img: '../img/totality_inverted.png',
        title: 'Totality',
        title_lesser: 'Solar Corona',
        description: `\
            This image is an HDR stack of 47 different bracketed exposures during totality, with shutter speeds ranging from 1/8000 to 2s. \
            All of the images were taken during the first 2 minutes of totality, before max eclipse. \
            ${pellett_desc} No color correction has been done to the sky on this image.<br><br>\ 
            The resulting image was then color inverted, making the coronal details much easier to view.`,
        metadata: [
            ['Date', '8 April 2024 at 15:04:34-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/8000 - 2s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7256.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    composite_horizontal: {
        img: '../img/composite_horizontal.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Horizontal Composite',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the left and C3-C4 on the right. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    composite_diagonal: {
        img: '../img/composite_diagonal.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Diagonal Composite',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the top left and C3-C4 on the bottom right. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    composite_mobile_matrix: {
        img: '../img/composite_mobile_matrix.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: '3x7 Regular Matrix',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the top and C3-C4 on the bottom. \
            Unline the straight line composites, these images have been arranged in a way similar to a matrix, to allow it to fit on a more evenly sized canvas. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    composite_diamondring_mobile_matrix: {
        img: '../img/composite_diamondring_mobile_matrix.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: '3x7 Diamond Ring Matrix',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the top and C3-C4 on the bottom. \
            Unline the straight line composites, these images have been arranged in a way similar to a matrix, to allow it to fit on a more evenly sized canvas. \
            However, I have replaced the two thinnest partial phases right before and after totality with their respective diamond rings. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    sunspot_3664: {
        img: '../img/sunspot_3664.jpg',
        title: 'Sun',
        title_lesser: 'Sunspot 3664',
        description: `\
            This is a full disk image of the sun on Saturday, May 11, 2024. \
            The massive sunspot region 3664 is clearly visible on the sun's southern limb. \
            This sunspot region was responsible for the aurorae visible all across the USA on Friday night/Saturday morning. \
            Unfortunately, it was cloudy where I was, so I did not get any photographs of the aurora itself, but I managed to snag this shot of the sunspot culprit during a break in the clouds. \
            ${sun_adjust_desc} \
            Other minor adjustments were made to further sharpen the sunspot's details, such as texture and clarity.`,
        metadata: [
            ['Date', '11 May 2024 at 14:39:42-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/2500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_8454.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    sunspot_3664_zoomedin: {
        img: '../img/sunspot_3664_zoomedin.jpg',
        title: 'Sun',
        title_lesser: 'Sunspot 3664 Zoomed In',
        description: `\
            This is a digitally zoomed in image of the massive sunspot region 3664 on Saturday, May 11, 2024. \
            This sunspot region was responsible for the aurorae visible all across the USA on Friday night/Saturday morning. \
            Unfortunately, it was cloudy where I was, so I did not get any photographs of the aurora itself, but I managed to snag this shot of the sunspot culprit during a break in the clouds. \
            ${sun_adjust_desc} \
            Other minor adjustments were made to further sharpen the sunspot's details, such as texture and clarity.`,
        metadata: [
            ['Date', '11 May 2024 at 14:39:42-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/2500, f/8, ISO 200'],
            ['Focal Length', '500mm + Digital Zoom'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_8454.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    full_eclipse_animation: {
        img: 'https://youtube.com/embed/-SwJHZ3ImnM',
        thumb: '../img/videos/thumb/full_eclipse_animation_thumbnail.jpg',
        width: 2546,
        height: 2304,
        title: 'Eclipse',
        title_lesser: 'Complete Timelapse of Eclipse Phases',
        description: `\
            This is a timelapse of 330 images of all phases of the total solar eclipse on 8 April 2024. \
            During the partial phases, an image was taken every 45 seconds, and they were all manually aligned and rotated by me afterwards. \
            During the total phases, the images were taken much closer together, within a few seconds of each other. \
            The sun is oriented so that the observer's zenith is facing upwards, not solar north. This makes the timelapse look like what observers on the ground saw. \
            ${sun_adjust_desc}`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:36-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Exposure', '1/2500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_7074.NEF thru DSC_7458.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    penumbral_eclipse_animation_slower: {
        img: 'https://youtube.com/embed/idg6L6_3ZtU',
        thumb: '../img/videos/thumb/penumbral_eclipse_animation_thumbnail.jpg',
        width: 1880,
        height: 1878,
        title: 'Lunar Eclipse',
        title_lesser: 'Timelapse of Penumbral Lunar Eclipse - 25 Mar 2024',
        description: `\
            This is a timelapse of 19 images of the partial phases of the penumbral lunar eclipse on 25 March 2024. \
            An image was taken every 15 minutes, and they were all aligned and rotated by me afterwards. \
            The darkening of the southern edge of the lunar limb is easily visible in this timelapse, and also to the naked eye.`,
        metadata: [
            ['Date', '25 March 2024 at 01:06:22-04:00 thru 05:25:04-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/1600, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_4741.NEF thru DSC_5031.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    moonrise_animation_24may2024: {
        img: 'https://youtube.com/embed/ayEECuVHdK0',
        thumb: '../img/videos/thumb/moonrise_animation_24may2024_thumbnail.jpg',
        width: 3160,
        height: 4818,
        title: 'Moonrise',
        title_lesser: 'Timelapse of Moonrise',
        description: `\
            This is a timelapse of the moon rising on 24 May 2024. The images were manually aligned by me afterwards. \
            The colors you see are exactly what the camera saw, nothing has been edited. All I did was give every single image the same white balance settings, beause the camera's AWB wasn't accurate on some.`,
        metadata: [
            ['Date', '24 May 2024 at 22:13:24-04:00 thru 22:38:02-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '0.4, f/5.6, ISO 200'],
            ['Focal Length', '200mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_9049.NEF thru DSC_9260.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    crescentmoon_plane: {
        img: '../img/crescentmoon_plane.jpg',
        title: 'Moon',
        title_lesser: 'Young Crescent Moon With Plane',
        description: `\
            At 7:55 PM local time, the crescent moon was visible in the sky as the sun was close to setting.\
            As I was taking regular moon shots, a plane flew into the camera's FOV! This was not planned at all, but the shots look awesome.\
            My camera settings weren't quite set right, because the plane flew by the moon when I wasn't fully set up yet.\
            Since there was a lot of noise in the image, I ran the RAW through Camera Raw's new AI Denoise function, which worked very well.\
            I then did standard corrections, such as exposure, noise reduction, masking out specks on the sensor, etc.`,
        metadata: [
            ['Date', '9 June 2024 at 19:55:58-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/800, f/9, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_9324.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.14.2024_NIGHT': {
        img: '../img/moon_7.14.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'First Quarter Moon - Night 14 Jul 2024',
        description: `\
            This moon image was taken at 8:50 PM local time.\
            The moon was 60.5% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '14 July 2024 at 20:50:48-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/40, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_9750.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.19.2024_MORNING': {
        img: '../img/moon_7.19.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Morning 19 Jul 2024',
        description: `\
            This moon image was taken at 1:15 AM local time.\
            The moon was 93.7% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '19 July 2024 at 01:15:06-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/80, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_9774.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.20.2024_MORNING': {
        img: '../img/moon_7.20.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Morning 20 Jul 2024',
        description: `\
            This moon image was taken at 12:56 AM local time.\
            The moon was 97.9% illuminated and was waxing.\
            More post-processing than usual was done. Due to moderatly cloudy skies, I had to dehaze the image first.`,
        metadata: [
            ['Date', '20 July 2024 at 00:56:44-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/25, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_9968.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.21.2024_MORNING': {
        img: '../img/moon_7.21.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Full Moon - Morning 21 Jul 2024',
        description: `\
            This moon image was taken at 12:09 AM local time.\
            The moon was 99.7% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '21 July 2024 at 00:09:44-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/250, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0142.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.22.2024_MORNING': {
        img: '../img/moon_7.22.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Full Moon - Morning 22 Jul 2024',
        description: `\
            This moon image was taken at 12:37 AM local time.\
            The moon was 99.1% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '22 July 2024 at 00:37:30-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/160, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0157.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.23.2024_MORNING': {
        img: '../img/moon_7.23.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Gibbous Moon - Morning 23 Jul 2024',
        description: `\
            This moon image was taken at 1:55 AM local time.\
            The moon was 95.4% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '23 July 2024 at 01:55:22-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/30, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0200.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'penumbral_eclipse_comparison_3.25.2024': {
        img: '../img/penumbral_eclipse_comparison_3.25.2024.jpg',
        title: 'Lunar Eclipse',
        title_lesser: 'Penumbral Eclipse Phases Comparison - 25 Mar 2024',
        description: `\
            This image is a comparison between the moon before a penumbral eclipse, and right in the middle of it.\
            No post-processing was done on these moon images.`,
        metadata: [
            ['Before Eclipse Date', '25 March 2024 at 00:52:54-04:00'],
            ['Mid-Eclipse Date', '25 March 2024 at 03:13:08-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure (for both)', '1/1600, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Raw File Reference', 'DSC_4725.NEF (before eclipse) and DSC_4886.NEF (mid-eclipse)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.28.2024_MORNING_rise': {
        img: '../img/moon_7.28.2024_MORNING_rise.jpg',
        title: 'Moon',
        title_lesser: 'Last Quarter Moonrise - Morning 28 Jul 2024',
        description: `\
            This moon image was taken at 12:34 AM local time.\
            The moon was 49.3% illuminated and was waning.\
            Minimal post-processing was done.\
            The red color of the moon you see was not edited by me, it was exactly what my camera saw and what I saw with my own eyes.`,
        metadata: [
            ['Date', '28 July 2024 at 00:34:55-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/10, f/8, ISO 500'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0624.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.28.2024_MORNING': {
        img: '../img/moon_7.28.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Last Quarter Moon - Morning 28 Jul 2024',
        description: `\
            This moon image was taken at 2:15 AM local time.\
            The moon was 48.5% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '28 July 2024 at 02:15:28-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/80, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0641.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.29.2024_MORNING': {
        img: '../img/moon_7.29.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Crescent Moon - Morning 29 Jul 2024',
        description: `\
            This moon image was taken at 2:14 AM local time.\
            The moon was 37.5% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '29 July 2024 at 02:14:06-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/30, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0720.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'sun_7.28.2024': {
        img: '../img/sun_7.28.2024.jpg',
        title: 'Sun',
        title_lesser: 'Sun - 28 Jul 2024',
        description: `\
        This is a full disk image of the sun on Sunday, July 28, 2024. \
        The large sunspot region 3765 is clearly visible near the center of the solar disk. \
        ${sun_adjust_desc} \
        Other minor adjustments were made to further sharpen the sunspot's details, such as texture and clarity.`,
        metadata: [
            ['Date', '28 July 2024 at 18:27:16-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/500, f/10, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0691.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'milkyway1': {
        img: '../img/milkyway1.jpg',
        title: 'Milky Way',
        title_lesser: 'Milky Way with Beach - Night 28 Jul 2024',
        description: `\
        This is an image of the milky way taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        I ran the raw photo through Camera Raw's AI Denoise function, and then did some simple curves adjustments to bring out more color.`,
        metadata: [
            ['Date', '28 July 2024 at 22:59:36-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05508.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'milkyway2': {
        img: '../img/milkyway2.jpg',
        title: 'Milky Way',
        title_lesser: 'Milky Way 2 - Night 28 Jul 2024',
        description: `\
        This is an image of the milky way taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        I ran the raw photo through Camera Raw's AI Denoise function, and then did some simple curves adjustments to bring out more color.`,
        metadata: [
            ['Date', '28 July 2024 at 23:04:37-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05510.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'milkyway3': {
        img: '../img/milkyway3.jpg',
        title: 'Milky Way',
        title_lesser: 'Milky Way 3 - Night 28 Jul 2024',
        description: `\
        This is an image of the milky way taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        I ran the raw photo through Camera Raw's AI Denoise function, and then did some simple curves adjustments to bring out more color.`,
        metadata: [
            ['Date', '28 July 2024 at 23:13:17-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05514.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_7.31.2024_MORNING': {
        img: '../img/moon_7.31.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Crescent Moon - Morning 31 Jul 2024',
        description: `\
            This moon image was taken at 4:23 AM local time.\
            The moon was 17.4% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '31 July 2024 at 04:23:14-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/25, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_0810.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'composite_horizontal_B&W': {
        img: '../img/composite_horizontal_B&W.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Horizontal Composite - Black & White',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the left and C3-C4 on the right. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            The resulting image was then converted to B&W in Photoshop.
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'composite_diagonal_B&W': {
        img: '../img/composite_diagonal_B&W.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Diagonal Composite - Black & White',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the top left and C3-C4 on the bottom right. \
            On top of the zoomed out corona image, I overlaid 20 partial phase images, one at every 10% of eclipse magnitude. \
            The resulting image was then converted to B&W in Photoshop.
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    composite_horizontal_diamondring: {
        img: '../img/composite_horizontal_diamondring.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Horizontal Composite with Diamond Rings',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the left and C3-C4 on the right. \
            On top of the zoomed out corona image, I overlaid 8 partial phase images (4 on each side), one at 90% of eclipse magnitude, and then at 70%, 40%, and 10%. \
            The diamond rings for C2 and C3 were also included. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'composite_horizontal_diamondring_B&W': {
        img: '../img/composite_horizontal_diamondring_B&W.jpg',
        title: 'Full Eclipse Composite',
        title_lesser: 'Horizontal Composite with Diamond Rings - Black & White',
        description: `\
            This is a full composite of the entire eclipse sequence, with C1-C2 on the left and C3-C4 on the right. \
            On top of the zoomed out corona image, I overlaid 8 partial phase images (4 on each side), one at 90% of eclipse magnitude, and then at 70%, 40%, and 10%. \
            The diamond rings for C2 and C3 were also included. \
            The resulting image was then converted to B&W in Photoshop. \
            ${sun_adjust_desc} \
            The sun appears hazy about midway through C3-C4 because a thin cirrus cloud layer moved in front of it during that time, making shooting conditions more hazy.`,
        metadata: [
            ['Date', '8 April 2024 at 13:38:16-04:00 thru 16:21:14-04:00'],
            ['Location', 'Vincennes, Indiana'],
            ['Sun Exposure', '1/2500, f/8, ISO 200 (partial phases only)'],
            ['Focal Length', '500mm (200mm for the totality shot)'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'Zomei Z699C Carbon Fiber with Ball Head'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.8.2024_NIGHT': {
        img: '../img/moon_8.8.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Crescent Moon - Night 8 Aug 2024',
        description: `\
            This moon image was taken at 8:37 PM local time.\
            The moon was 18.3% illuminated and was waxing.\
            Minimal post-processing was done.\
            The conditions outside were very windy and humid due to Tropical Storm Debby, and since I didn't want to expose my camera to all of that, I shot this moon photo through a window.\
            I had to put my ISO up a bit more than usual to ensure a fast shutter speed to reduce glare from the window.`,
        metadata: [
            ['Date', '8 August 2024 at 20:37:21-04:00'],
            ['Location', 'Emerald Isle, North Carolina'],
            ['Exposure', '1/50, f/8, ISO 1000'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1011.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.10.2024_NIGHT': {
        img: '../img/moon_8.10.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Crescent Moon - Night 10 Aug 2024',
        description: `\
            This moon image was taken at 8:45 PM local time.\
            The moon was 34.9% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '10 August 2024 at 20:45:00-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/40, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1030.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'sun_8.11.2024': {
        img: '../img/sun_8.11.2024.jpg',
        title: 'Sun',
        title_lesser: 'Sun - 11 Aug 2024',
        description: `\
        This is a full disk image of the sun on Sunday, August 11, 2024. \
        The large sunspot region 3780 is clearly visible near the center of the solar disk, as well as 3784 near the top left. \
        ${sun_adjust_desc} \
        Other minor adjustments were made to further sharpen the sunspot's details, such as texture and clarity.`,
        metadata: [
            ['Date', '11 August 2024 at 16:40:57-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/2500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1039.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.11.2024_NIGHT': {
        img: '../img/moon_8.11.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'First Quarter Moon - Night 11 Aug 2024',
        description: `\
            This moon image was taken at 8:20 PM local time.\
            The moon was 44.1% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '11 August 2024 at 20:20:41-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/125, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1078.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.12.2024_NIGHT': {
        img: '../img/moon_8.12.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'First Quarter Moon - Night 12 Aug 2024',
        description: `\
            This moon image was taken at 9:21 PM local time.\
            The moon was 54.2% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '12 August 2024 at 21:21:14-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/160, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1099.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'aurora1_8.12.2024': {
        img: '../img/aurora1_8.12.2024.jpg',
        title: 'Aurora',
        title_lesser: 'Aurora with Shooting Star - Morning 12 Aug 2024',
        description: `\
        This is an image of the northern lights, also known as the aurora, taken with an older mirrorless Sony camera.\
        A shooting star streaked across the sky during this 30 second exposure as part of the Perseids meteor shower.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        The only editing I did was darkening the color of the trees in the foreground to remove color noise. The pink sky color is exactly what my camera saw.`,
        metadata: [
            ['Date', '12 August 2024 at 02:35:39-04:00'],
            ['Location', 'Marshall, Virginia'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05627.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'aurora2_8.12.2024': {
        img: '../img/aurora2_8.12.2024.jpg',
        title: 'Aurora',
        title_lesser: 'Aurora 2 - Morning 12 Aug 2024',
        description: `\
        This is an image of the northern lights, also known as the aurora, taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        No editing was done to this image. The pink sky color is exactly what my camera saw.`,
        metadata: [
            ['Date', '12 August 2024 at 02:33:19-04:00'],
            ['Location', 'Marshall, Virginia'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05625.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'aurora3_8.12.2024': {
        img: '../img/aurora3_8.12.2024.jpg',
        title: 'Aurora',
        title_lesser: 'Aurora 3 - Morning 12 Aug 2024',
        description: `\
        This is an image of the northern lights, also known as the aurora, taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        The only editing I did was darkening the color of the trees in the foreground to remove color noise. The pink sky color is exactly what my camera saw.`,
        metadata: [
            ['Date', '12 August 2024 at 03:04:13-04:00'],
            ['Location', 'Marshall, Virginia'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05643.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'aurora4_8.12.2024': {
        img: '../img/aurora4_8.12.2024.jpg',
        title: 'Aurora',
        title_lesser: 'Aurora 4 - Morning 12 Aug 2024',
        description: `\
        This is an image of the northern lights, also known as the aurora, taken with an older mirrorless Sony camera.\
        Since the photo was taken in a Bortle class 4 location, there was still a fair amount of light pollution, meaning the resulting image isn't the sharpest.\
        The only editing I did was darkening the color of the trees in the foreground to remove color noise. The pink sky color is exactly what my camera saw.`,
        metadata: [
            ['Date', '12 August 2024 at 02:25:18-04:00'],
            ['Location', 'Marshall, Virginia'],
            ['Exposure', '30s, f/4, ISO 6400'],
            ['Focal Length', '18mm'],
            ['Camera', 'Sony NEX-C3'],
            ['Lens', 'Sony E 18-55mm F3.5-5.6 OSS'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC05617.ARW'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.13.2024_NIGHT': {
        img: '../img/moon_8.13.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Night 13 Aug 2024',
        description: `\
            This moon image was taken at 9:20 PM local time.\
            The moon was 64.1% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '13 August 2024 at 21:20:58-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/160, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1124.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.14.2024_NIGHT': {
        img: '../img/moon_8.14.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Night 14 Aug 2024',
        description: `\
            This moon image was taken at 10:51 PM local time.\
            The moon was 74.2% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '14 August 2024 at 22:51:02-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/160, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1146.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.15.2024_NIGHT': {
        img: '../img/moon_8.15.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Night 15 Aug 2024',
        description: `\
            This moon image was taken at 11:16 PM local time.\
            The moon was 83.1% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '15 August 2024 at 23:16:49-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/80, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1168.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.18.2024_MORNING': {
        img: '../img/moon_8.18.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waxing Gibbous Moon - Morning 18 Aug 2024',
        description: `\
            This moon image was taken at 12:33 AM local time.\
            The moon was 96.3% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '18 August 2024 at 00:33:07-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/320, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1197.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.18.2024_NIGHT': {
        img: '../img/moon_8.18.2024_NIGHT.jpg',
        title: 'Moon',
        title_lesser: 'Full Moon - Night 18 Aug 2024',
        description: `\
            This moon image was taken at 9:08 PM local time.\
            The moon was 99.1% illuminated and was waxing.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '18 August 2024 at 21:08:49-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/160, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', '<i>Handheld</i>'],
            ['Mount', '<i>Handheld</i>'],
            ['Raw File Reference', 'DSC_1227.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.20.2024_MORNING': {
        img: '../img/moon_8.20.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Full Moon - Morning 20 Aug 2024',
        description: `\
            This moon image was taken at 3:49 AM local time.\
            The moon was 99.5% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '20 August 2024 at 03:49:38-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/1000, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1419.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.21.2024_MORNING': {
        img: '../img/moon_8.21.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Gibbous Moon - Morning 21 Aug 2024',
        description: `\
            This moon image was taken at 3:12 AM local time.\
            The moon was 96.5% illuminated and was waning.\
            Minimal post-processing was done.`,
        metadata: [
            ['Date', '21 August 2024 at 03:12:54-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/640, f/9, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1461.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.22.2024_MORNING': {
        img: '../img/moon_8.22.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Gibbous Moon - Morning 22 Aug 2024',
        description: `\
            This moon image was taken at 3:48 AM local time.\
            The moon was 90.6% illuminated and was waning.\
            Minimal post-processing was done.\
            Seeing conditions were poor, so this moon image is not as sharp as others that I've taken.`,
        metadata: [
            ['Date', '22 August 2024 at 03:48:11-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_1475.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'moon_8.23.2024_MORNING': {
        img: '../img/moon_8.23.2024_MORNING.jpg',
        title: 'Moon',
        title_lesser: 'Waning Gibbous Moon - Morning 23 Aug 2024',
        description: `\
            This moon image was taken at 4:08 AM local time.\
            The moon was 82.4% illuminated and was waning.\
            Minimal post-processing was done.\
            Seeing conditions were poor, so this moon image is not as sharp as others that I've taken.`,
        metadata: [
            ['Date', '23 August 2024 at 04:08:45-04:00'],
            ['Location', 'Alexandria, Virginia'],
            ['Exposure', '1/500, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', '<i>Handheld</i>'],
            ['Mount', '<i>Handheld</i>'],
            ['Raw File Reference', 'DSC_1539.NEF'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
    'partial_lunar_eclipse_9.17.2024': {
        img: '../img/partial_lunar_eclipse_9.17.2024.jpg',
        title: 'Lunar Eclipse',
        title_lesser: 'Partial Lunar Eclipse of 17 September 2024',
        description: `\
            On September 17, 2024, a partial eclipse of the moon occured, with only 3.5% of the lunar disk cast into shadow by the Earth's umbra.\
            I initially intended to see the eclipse from Washington DC, but it was forecast to be cloudy that night.\
            Unfortunatly, everywhere else within a 3 hour driving radius was also forecast to be cloudy, so I was tempted to sit this eclipse out.\
            However, I saw that there would be some breaks in the low clouds in eastern Pennsylvania around the time of maximum eclipse, so I decided to give it a shot.\
            I drove 3 hours to Hazleton, PA, and set up my camera around 10:20 PM eastern time, right when the eclipse began its partial phases.<br><br>\
            It was still very cloudy, so the shots I got were quite blurry. However, I was able to reveal some of the moon's surface features using Photoshop.\
            First, I took the clearest image I took with the least amount of clouds, and I put that as my base layer. I adjusted the dehaze, clarity, and texture sliders.\
            I then took a long exposure, and after adjusting those same sliders, put a high-pass filter on it, and set the blend mode to "overlay."\
            I stacked 3 identical high pass filters on 3 separate layers, which gave me a pretty good image.\
            However, the top of the lunar disk, which was eclipsed, was still too dark to be shown.\
            I then took a longer exposure than the previous two, and masked the bottom away, so the only thing visible was the top eclipsed portion.\
            I again adjusted some sliders, and ran 3 high pass filters with an "overlay" blend mode.\
            I cleaned up some dust specks on the image that came from my camera sensor, and then I was done.`,
        metadata: [
            ['Base Date', '17 September 2024 at 22:47:06-04:00'],
            ['Bottom High-Pass Date', '17 September 2024 at 22:50:23-04:00'],
            ['Top High-Pass Date', '17 September 2024 at 22:50:31-04:00'],
            ['Location', 'Hazleton, Pennsylvania'],
            ['Base Exposure', '1/5, f/8, ISO 200'],
            ['Bottom High-Pass Exposure', '1s, f/8, ISO 200'],
            ['Top High-Pass Exposure', '2s, f/8, ISO 200'],
            ['Focal Length', '500mm'],
            ['Camera', 'Nikon D7000'],
            ['Lens', 'Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR'],
            ['Tripod', 'K&F Concept 64 inch/163cm Camera Tripod K234A0'],
            ['Mount', 'K&F Concept 3-Way Geared Tripod Head GD3W'],
            ['Raw File Reference', 'DSC_2040.NEF (base), DSC_2062.NEF (bottom high-pass), DSC_2063.NEF (top high-pass)'],
            ['Rights', 'Copyright © 2024 E.A. Lawlor. All rights reserved.']
        ]
    },
}

module.exports = photo_info;