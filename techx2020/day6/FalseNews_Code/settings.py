'''
This file contains various libraries and functions and parameters for creating visualizations. It also inclues a few helper functions.
'''
from scipy import stats
from scipy.spatial.distance import cosine
import bisect
import pandas as pd
import statsmodels.api as sm
import statsmodels.formula.api as smf
import dateutil.parser as parser
import matplotlib as mpl
import datetime
from pylab import MaxNLocator
import seaborn
import matplotlib.pyplot as plt
import numpy as np
import sys
import networkx as nx
import csv
import math
import random
seaborn.set_style(style='white')
seaborn.set_style("ticks")
mpl.rcParams['xtick.labelsize'] = 12
mpl.rcParams['ytick.labelsize'] = 12
plt.rcParams['svg.fonttype']='none'

epsilon=sys.float_info.epsilon
fs=30 #font size 1
fs_2=30 #font size 2
lw=4 #linewidth for visualization
thresh=2 #threshold for dynamic measures (i.e., there needs to be at least two points for each observation)

veracity2color={"TRUE":'green',
        "FALSE":'red',
        'MIXED':'orange'}
category2linestyle={'Politics':'-',
        'Other':'--'}



def calc_kl(q,p):
    """Kullback-Leibler divergence D(P || Q) for discrete distributions
    p and q both must sum up to 1.
    """
    assert 1.0-sum(q)<1e9 and 1.0-sum(p)<1e9
    p = np.asarray(p, dtype=np.float)
    q = np.asarray(q, dtype=np.float)
    kl=np.sum(np.where(p != 0, p * np.log(p / q), 0))
    return kl

def calc_bhatta(back_topic,tid_topic):
    """
    bhattacharyya distance
    """
    h1=np.mean(tid_topic)
    n=len(tid_topic)

    h2= np.mean(back_topic);
    score = 0;
    for i in range(n):
        score += math.sqrt( tid_topic[i] * back_topic[i] );
    try:
        score = math.sqrt( 1 - ( 1 / math.sqrt(h1*h2*n*n) ) * score );
    except:
        score=.99
    bhat=score
    return bhat


def calc_inf_uniq(back_topic,tid_topic):
    '''
    information uniqueness
    '''
    iu=cosine(back_topic,tid_topic)
    if math.isnan(iu):
        iu=.99
    return iu


def calc_robust_sem(y_r,clusters):
    '''
    calculated the cluster robust semof array
    '''
    x_r=[1]*len(y_r)
    res = sm.OLS(y_r,x_r).fit(cov_type='cluster',cov_kwds={'groups': clusters})
    robust_sem=res.bse[0]
    return robust_sem


def quarter_year(date):
    if date.month<4:
        daty='01'
    elif date.month<7:
        daty='04'
    elif date.month<10:
        daty='07'
    else:
        daty='10'
    date=str(date.year)+'-'+daty+'-'+'01'
    date = parser.parse(date)
    return date

def log_10_product(x, pos):
    if x<1:
        if x>0.009:
            return '%1.2f' % (x)  #1.2f
        elif x>0.0009:
            return '%1.3f' % (x)  #1.2f
        elif x>0.00009:
            return '%1.4f' % (x)  #1.2f
    else:
        z='%1i' % (x)
        if z=='10000':
            return '10K'
        elif z=='100000':
            return '100K'
        elif z=='1000000':
            return '1000K'
        else:
            return z

def no_zero(x, pos):
    val_str = '{:g}'.format(x)
    if np.abs(x) > 0 and np.abs(x) < 1:
        return val_str.replace("0", "", 1)
    else:
        return val_str


def year(x, pos):
    return str(datetime.datetime.fromordinal(int(x)).year)[2:]


def lognormal(x,pos):
    if x<1:
        return '%1.2f' % (x)
    else:
        z=10**x
        if int(z)==z:
            z=str(int(z))
        if z=='10000':
            return '10K'
        elif z=='100000':
            return '100K'
        elif z=='1000000':
            return '1000K'
        else:
            return z

def lognormal2(x,pos):
    if x<1:
        return '%1.2f' % (x)
    else:
        z='%1i' % (10**x)
        return z

def kit(x, pos):
    val_str = '{:g}'.format(x)
    if val_str=='5000':
        return '5K'
    elif val_str=='15000':
        return '15K'
    elif val_str=='25000':
        return '25K'
    elif val_str=='35000':
        return '35K'
    elif val_str=='45000':
        return '45K'
    elif val_str=='10000':
        return '10K'
    elif val_str=='20000':
        return '20K'
    elif val_str=='30000':
        return '30K'
    elif val_str=='40000':
        return '40K'
    elif val_str=='50000':
        return '50K'
    elif val_str=='60000':
        return '60K'
    elif val_str=='100000':
        return '100K'
    else:
        return val_str



def kit2(x, pos):
    val_str = '{:g}'.format(x)
    if val_str=='10000':
        return '10K'
    elif val_str=='20000':
        return '20K'
    elif val_str=='30000':
        return '30K'
    elif val_str=='40000':
        return '40K'
    elif val_str=='50000':
        return '50K'
    elif val_str=='5000':
        return '5K'
    elif val_str=='15000':
        return '15K'
    elif val_str=='25000':
        return '25K'
    elif val_str=='35000':
        return '35K'
    elif val_str=='45000':
        return '45K'
    elif val_str=='10000':
        return '10K'
    elif val_str=='20000':
        return '20K'
    elif val_str=='30000':
        return '30K'
    elif val_str=='40000':
        return '40K'
    elif val_str=='50000':
        return '50K'
    elif val_str=='60000':
        return '60K'
    elif val_str=='100000':
        return '100K'
    else:
        return val_str

