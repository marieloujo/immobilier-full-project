package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.Article;
import bj.immobilier.immobilier.model.Illustration;
import bj.immobilier.immobilier.model.Paginate;
import bj.immobilier.immobilier.service.ArticleService;
import bj.immobilier.immobilier.utils.FileService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/article")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ArticleController {



    @Autowired
    private ArticleService articleService;


    @Autowired
    private FileService fileService;



    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public Paginate getArticles(@Param("page") String page) {

        System.out.println("numero page " + page);

        return  articleService.readAll(Integer.valueOf(page));

    }



    @RequestMapping(value = "/list/location", method = RequestMethod.GET)
    public Paginate getArticlesEnLocation(@Param("page") String page) {

        return  articleService.readAllbyRent(Integer.valueOf(page), true);

    }



    @RequestMapping(value = "/list/vente", method = RequestMethod.GET)
    public Paginate getArticlesEnVente(@Param("page") String page) {

        return  articleService.readAllbyRent(Integer.valueOf(page), false);
    }



    @RequestMapping(value = "/list/filtre", method = RequestMethod.GET)
    public Paginate filtreArticle(@Param("page") String page, @Param("keyWord") String keyWord, @Param("villeId") String villeId,
                                  @Param("categorie") String categorie, @Param("prxStart") String prxStart, @Param("prixEnd") String prixEnd) {

        return articleService.search(Integer.valueOf(page), keyWord, Long.valueOf(villeId), categorie, Integer.valueOf(prxStart), Integer.valueOf(prixEnd));
    }





    @RequestMapping(value = "/create", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional(rollbackOn = Exception.class)
    public Article createArticles(@RequestPart("files") List<MultipartFile> files, @RequestPart("article") String article) throws JsonProcessingException {

        Article article1 = new ObjectMapper().readValue(article, Article.class);

        List<Illustration> illustrations = new ArrayList<>();


        for (int i = 0; i < files.size(); i++) {

            Illustration illustration = new Illustration();
            illustration.setUrl(fileService.storeFile(files.get(i)));
            illustrations.add(illustration);

        }

        article1.setIllustrations(illustrations);

        return articleService.create(article1);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Article updateArticles(@Valid @RequestBody Article article) {

        return articleService.update(article);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Article> findArticlebyId(@PathVariable("id") Long id) {

        return articleService.findbyId(id);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteArticlebyId(@PathVariable("id") Long id) {

         articleService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteArticle(@Valid @RequestBody Article article) {

        articleService.delete(article);

    }
    

}
