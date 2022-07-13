package bj.immobilier.immobilier.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "utilisateur")
@JsonIgnoreProperties("articles")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    @Column(name = "nom_prenoms")
    private String nomPrenoms;



    @Column(name = "sexe")
    private String Sexe;



    @Column(name = "telephone")
    private String telephone;



    @Column(name = "email")
    private String email;



    @Column(name = "adresse")
    private String adresse;


    @Column(name = "username")
    private String username;


    @Column(name = "password")
    private String password;


    @Column(name = "is_physical_person")
    private boolean isPhysicalPerson;


    @Column(name = "numero_ifu")
    private String ifu;



    @Column(name = "role")
    private String role;



    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdAt;



    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updateAt;



    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Article> articles;




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

    public String getNomPrenoms() {
        return nomPrenoms;
    }

    public void setNomPrenoms(String nomPrenoms) {
        this.nomPrenoms = nomPrenoms;
    }

    public String getSexe() {
        return Sexe;
    }

    public void setSexe(String sexe) {
        Sexe = sexe;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isPhysicalPerson() {
        return isPhysicalPerson;
    }

    public void setPhysicalPerson(boolean physicalPerson) {
        isPhysicalPerson = physicalPerson;
    }

    public String getIfu() {
        return ifu;
    }

    public void setIfu(String ifu) {
        this.ifu = ifu;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
