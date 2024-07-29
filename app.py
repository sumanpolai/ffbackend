from flask import Flask, jsonify, send_from_directory, render_template
import os

app = Flask(__name__)
IMAGES_DIR = os.path.join(app.static_folder, 'images')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/images')
def list_images():
    # List all files in the images directory
    files = [f for f in os.listdir(IMAGES_DIR) if os.path.isfile(os.path.join(IMAGES_DIR, f))]
    # Generate URLs for images
    image_urls = [f'/static/images/{file}' for file in files]
    return jsonify(image_urls)

@app.route('/static/images/<filename>')
def serve_image(filename):
    return send_from_directory(IMAGES_DIR, filename)

if __name__ == '__main__':
    app.run(debug=True)
