const ZAI = require('z-ai-web-dev-sdk');

async function generateBackgroundImages() {
  try {
    const zai = await ZAI.create();

    console.log('Generating beautiful background images for the birthday website...');

    // Generate a romantic sunset background
    const sunsetImage = await zai.images.generations.create({
      prompt: 'Beautiful romantic sunset with pink and orange clouds, soft golden light, dreamy atmosphere, perfect for a love website background',
      size: '1024x1024'
    });
    
    console.log('Sunset background generated successfully');
    
    // Generate a floral background
    const floralImage = await zai.images.generations.create({
      prompt: 'Soft pink roses and flowers with bokeh effect, romantic and elegant, light and airy, perfect for birthday celebration',
      size: '1024x1024'
    });
    
    console.log('Floral background generated successfully');
    
    // Generate a heart-themed background
    const heartsImage = await zai.images.generations.create({
      prompt: 'Soft floating hearts in pastel colors, dreamy and romantic, subtle and elegant background for love website',
      size: '1024x1024'
    });
    
    console.log('Hearts background generated successfully');
    
    // Generate a starry night background
    const starsImage = await zai.images.generations.create({
      prompt: 'Romantic starry night sky with soft moonlight, dreamy and magical, perfect for expressing eternal love',
      size: '1024x1024'
    });
    
    console.log('Starry background generated successfully');
    
    // Save the images (in a real implementation, you'd save these to files)
    console.log('All background images generated successfully!');
    
  } catch (error) {
    console.error('Error generating images:', error.message);
  }
}

generateBackgroundImages();