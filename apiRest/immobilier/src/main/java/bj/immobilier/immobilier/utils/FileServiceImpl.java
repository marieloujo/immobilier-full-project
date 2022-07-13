package bj.immobilier.immobilier.utils;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Random;

@Service
public class FileServiceImpl implements FileService {
	
	/**
     * Permet de d'enregister le fichier
     * @param file
     * @return String
     */

	String path = "src/main/resources/static/images/";

	File file1 = new File(path);

	String 	DIRECTORY_PATH = file1.getAbsolutePath();

	public String storeFile(MultipartFile file) {

		String filename = genereateName() + "." + file.getOriginalFilename().split("\\.")[1];

		Path filePath = Paths.get( DIRECTORY_PATH + "/" + filename);
		 try {
			   Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

			 return "http://127.0.0.1:8080/images/" + filename;

		 } catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}




	private String genereateName() {

		String filename = "Article_";

		Random random = new Random();


		for (int i = 0; i < 100; i++) {


			filename += String.valueOf(random.nextInt(10));

		}

		/*filename += "_";

		byte[] array = new byte[7]; // length is bounded by 7
		new Random().nextBytes(array);
		filename  += new String(array, Charset.forName("UTF-8"));

*/
		return filename;

	}




}
