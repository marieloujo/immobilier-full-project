package bj.immobilier.immobilier.model;

import java.util.List;

public class Paginate {


    private int totalPage;


    private long totalElement;


    private List<Article> articleList;


    public Paginate(int totalPage, long totalElement, List<Article> articleList) {
        this.totalPage = totalPage;
        this.totalElement = totalElement;
        this.articleList = articleList;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public List<Article> getArticleList() {
        return articleList;
    }

    public void setArticleList(List<Article> articleList) {
        this.articleList = articleList;
    }


    public long getTotalElement() {
        return totalElement;
    }

    public void setTotalElement(long totalElement) {
        this.totalElement = totalElement;
    }
}
