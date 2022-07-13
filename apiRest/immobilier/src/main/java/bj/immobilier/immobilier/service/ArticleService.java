package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Article;
import bj.immobilier.immobilier.model.Illustration;
import bj.immobilier.immobilier.model.Paginate;
import bj.immobilier.immobilier.repository.ArticleDao;
import bj.immobilier.immobilier.repository.VilleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {


    @Autowired
    private ArticleDao articleDao;


    @Autowired
    private VilleDao villeDao;



    @Autowired
    private IllustrationService illustrationService;



    @Transactional(rollbackOn = Exception.class)
    public Paginate readAll(int page) {

        Pageable paging = PageRequest.of(page, 6);
        Page<Article> pagedResult = articleDao.findAll(paging);


        return new Paginate(pagedResult.getTotalPages(), pagedResult.getTotalElements(), pagedResult.getContent());
    }




    @Transactional(rollbackOn = Exception.class)
    public Paginate readAllbyRent(int page, boolean rent) {

        Pageable paging = PageRequest.of(page, 6);
        Page<Article> pagedResult = articleDao.findAllByRent(rent,paging);


        return new Paginate(pagedResult.getTotalPages(), pagedResult.getTotalElements(), pagedResult.getContent());
    }






    @Transactional(rollbackOn = Exception.class)
    public Article create(Article article) {

        article.setVille(villeDao.getOne(article.getVille().getId()));
        articleDao.save(article);

        List<Illustration> illustrations = new ArrayList<>();

        for (int i = 0; i < article.getIllustrations().size(); i++) {

            article.getIllustrations().get(i).setArticle(articleDao.getOne(article.getId()));

            illustrations.add(illustrationService.create(article.getIllustrations().get(i)));

        }

        article.setIllustrations(illustrations);

        return article;

    }



    @Transactional(rollbackOn = Exception.class)
    public Article update(Article article) {

        return articleDao.save(article);

    }





    @Transactional(rollbackOn = Exception.class)
    public Paginate search(int page, String keyWord, Long villeId, String categorie, Integer prxStart, Integer prixEnd) {

        Pageable paging = PageRequest.of(page, 6);
        Page<Article> pagedResult =
                articleDao.findAllByLibelleContainingOrVilleOrCategorieOrPrixBetween(keyWord, villeDao.getOne(villeId),
                        categorie, prxStart, prixEnd,paging);


        return new Paginate(pagedResult.getTotalPages(), pagedResult.getTotalElements(), pagedResult.getContent());

    }



    @Transactional(rollbackOn = Exception.class)
    public Optional<Article> findbyId(Long id) {

        return articleDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(Article article) {

         articleDao.delete(article);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        articleDao.deleteById(id);

    }






}
