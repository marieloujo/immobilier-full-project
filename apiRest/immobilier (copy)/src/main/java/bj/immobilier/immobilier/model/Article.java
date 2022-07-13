package bj.immobilier.immobilier.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "article")
//@JsonIgnoreProperties("user")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Article {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "libelle")
    private String libelle;



    @Column(name = "description", columnDefinition="TEXT")
    @Lob
    private String description;



    @Column(name = "adresse")
    private String adresse;



    @Column(name = "prix")
    private Integer prix;


    private String qualifier;



    @Column(name = "categorie")
    private String categorie;



    @Column(name = "surface")
    private String surface;



    @Column(name = "nb_chambre")
    private Integer nbChambre;



    @Column(name = "nb_douche")
    private Integer nbDouche;



    @Column(name = "is_rent")
    private boolean rent;



    @Column(name = "enabled")
    private boolean enabled;




    @OneToMany(mappedBy = "article")
    @JsonIgnoreProperties("article")
    private List<Illustration> illustrations;




    @ManyToOne
    @JoinColumn(name = "id_utilisateur")
    @JsonIgnoreProperties("articles")
    private User user;



    @ManyToOne
    @JoinColumn(name = "id_ville")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Ville ville;




    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdAt;




    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public Integer getPrix() {
        return prix;
    }

    public void setPrix(Integer prix) {
        this.prix = prix;
    }

    public String getQualifier() {
        return qualifier;
    }

    public void setQualifier(String qualifier) {
        this.qualifier = qualifier;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getSurface() {
        return surface;
    }

    public void setSurface(String surface) {
        this.surface = surface;
    }

    public Integer getNbChambre() {
        return nbChambre;
    }

    public void setNbChambre(Integer nbChambre) {
        this.nbChambre = nbChambre;
    }

    public Integer getNbDouche() {
        return nbDouche;
    }

    public void setNbDouche(Integer nbDouche) {
        this.nbDouche = nbDouche;
    }

    public boolean isRent() {
        return rent;
    }

    public void setRent(boolean rent) {
        this.rent = rent;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<Illustration> getIllustrations() {
        return illustrations;
    }

    public void setIllustrations(List<Illustration> illustrations) {
        this.illustrations = illustrations;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Ville getVille() {
        return ville;
    }

    public void setVille(Ville ville) {
        this.ville = ville;
    }

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
