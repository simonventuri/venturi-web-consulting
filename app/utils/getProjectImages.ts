import fs from 'fs';
import path from 'path';

export function getAllProjectImages(): string[] {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const images: string[] = [];
  
  try {
    const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const folder of projectFolders) {
      const folderPath = path.join(projectsDir, folder);
      const files = fs.readdirSync(folderPath);
      
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      
      for (const file of imageFiles) {
        images.push(`/projects/${folder}/${file}`);
      }
    }
  } catch (error) {
    console.error('Error reading project images:', error);
    return [];
  }

  return images;
}