
package bj.immobilier.immobilier.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;



@Entity
@Table(name = "USERS_AUTHORITIES")
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserAuthority implements GrantedAuthority, Serializable {



	private static final long serialVersionUID = 431340819695287407L;



	@ManyToOne
	@JoinColumn(name = "authority_id")
	private Authority authorith;



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;



	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties(value = "authorities")
	@Cascade(CascadeType.DETACH)
	private User user;




	public Authority getAuthorith() {
		return authorith;
	}



	public String getAuthority() {
		// TODO Auto-generated method stub
		return null;
	}



	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param authorith
	 *            the authorithy to set
	 */
	public void setAuthorith(Authority authorith) {
		this.authorith = authorith;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @param user
	 *            the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

}
