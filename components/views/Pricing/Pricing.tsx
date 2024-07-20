"use client";
import "./Pricing.css";
import {Button, Card} from "@/components";
import data from "@/app/resources";
import React from "react";

interface Feature {
    [key: string]: {
        name: string;
    }
}

interface Plan {
    name: string;
    desc: string;
    amount?: number|0;
    features?: string[]|[];
    period?: string|"mes";
    before?: number
}

function Pricing() {
    const planFeatures: Feature = data.Features;
    const plans: Plan[] = data.Plans;
    return (
        <section id="pricing" className="Pricing">
            <div className="Pricing-Header">
                <h2>Elige tu plan</h2>
            </div>
            <div className="Pricing-Table">
                {
                    plans.map((plan, index) => (
                        <Card cardType="vertical" className={(plan.before ? "promo" : "")}>
                            <div className="Card-Header">
                                <h3>{plan.name ?? "plan " + (index + 1)}</h3>
                                <p>{plan.desc || <br/>}</p>
                                {(plan.before) ? <s ><span>AR</span>$ <strong>{plan.before}</strong>/{plan.period ?? "mes"}</s> : <div className="separator"/>}
                                <h4><span>AR</span>$ <strong>{plan.amount ?? 0}</strong>/{plan.period ?? "mes"}</h4>
                                <div className="Card-Button">
                                    <Button buttonType={(plan.before) ? "solid" : "outline"} href="#">Consulta con un
                                        asesor</Button></div>
                            </div>
                            <div className="Card-Info">
                                <hr/>
                                <ul>
                                    {
                                        (plan.features ?? []).map(
                                            (feature, index_feature) => (
                                                <li><Button buttonType="icon">✓</Button>
                                                    {planFeatures[feature].name || "feature " + (index_feature + 1)}
                                                </li>
                                            ))
                                    }
                                </ul>
                            </div>
                        </Card>)
                    )
                }
            </div>
        </section>
    );
}

export default Pricing;
