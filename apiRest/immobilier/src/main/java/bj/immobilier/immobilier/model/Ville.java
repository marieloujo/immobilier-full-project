package bj.immobilier.immobilier.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ville")
@JsonIgnoreProperties("departement")
public class Ville {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    @Column(name = "libelle")
    private String libelle;



    @ManyToOne
    @JoinColumn(name = "id_departement")
    @JsonIgnoreProperties("villes")
    private Departement departement;


/*

    @OneToMany(mappedBy = "ville", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("ville")
    private List<Article> articles;

*/


    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @JsonIgnore
    private Date createdAt;




    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonIgnore
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updateAt;




    @PrePersist
    public void addTimestamp() {

        createdAt = new Date();

    }



    @PreUpdate
    public void updateTime() {


        updateAt = new Date();

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

    /*public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }*/

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }
}
