//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.11.17 at 01:19:06 PM CST 
//


package com.ibm.iis.igc.asset_type_descriptor;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Family complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Family">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;group ref="{http://www.ibm.com/iis/igc/asset-type-descriptor}Labeling"/>
 *       &lt;attGroup ref="{http://www.ibm.com/iis/igc/asset-type-descriptor}Positioning"/>
 *       &lt;attribute name="classRefs" use="required" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Family", propOrder = {
    "label"
})
public class Family {

    @XmlElement(required = true)
    protected Label label;
    @XmlAttribute(name = "classRefs", required = true)
    protected String classRefs;
    @XmlAttribute(name = "position")
    protected Float position;

    /**
     * Gets the value of the label property.
     * 
     * @return
     *     possible object is
     *     {@link Label }
     *     
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Sets the value of the label property.
     * 
     * @param value
     *     allowed object is
     *     {@link Label }
     *     
     */
    public void setLabel(Label value) {
        this.label = value;
    }

    /**
     * Gets the value of the classRefs property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClassRefs() {
        return classRefs;
    }

    /**
     * Sets the value of the classRefs property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClassRefs(String value) {
        this.classRefs = value;
    }

    /**
     * Gets the value of the position property.
     * 
     * @return
     *     possible object is
     *     {@link Float }
     *     
     */
    public float getPosition() {
        if (position == null) {
            return  1000.0F;
        } else {
            return position;
        }
    }

    /**
     * Sets the value of the position property.
     * 
     * @param value
     *     allowed object is
     *     {@link Float }
     *     
     */
    public void setPosition(Float value) {
        this.position = value;
    }

}
