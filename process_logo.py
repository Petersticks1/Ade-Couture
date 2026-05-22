from PIL import Image, ImageOps

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Create a white image of the same size
    white_img = Image.new("RGBA", img.size, (255, 255, 255, 255))
    
    # Extract alpha channel to use as mask
    r, g, b, a = img.split()
    
    # Since we want it white, we just use the original alpha channel on a pure white image
    white_logo = Image.merge('RGBA', (white_img.split()[0], white_img.split()[1], white_img.split()[2], a))
    
    # Crop to bounding box (this trims all the empty transparent padding)
    bbox = white_logo.getbbox()
    if bbox:
        white_logo = white_logo.crop(bbox)
        
    # To "increase size" to the maximum possible, we do absolutely NO padding.
    width, height = white_logo.size
    max_dim = max(width, height)
    new_size = max_dim  # EXACT size, 0 padding
    
    square_img = Image.new('RGBA', (new_size, new_size), (0, 0, 0, 0))
    offset = ((new_size - width) // 2, (new_size - height) // 2)
    square_img.paste(white_logo, offset)
    
    # Resize to standard favicon size (256x256 is good for high res)
    square_img = square_img.resize((256, 256), Image.Resampling.LANCZOS)
    
    square_img.save(output_path)
    print("Logo successfully inverted to white and resized tightly.")

process_logo("public/logo.png", "public/logo.png")
